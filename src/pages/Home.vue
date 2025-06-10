<script setup>
import { inject, onMounted, reactive, ref, watch } from 'vue'
import instance from '@/assets/instance'
import CardList from '../components/card-list.vue'

const { cart, addToCart, removeFromCart } = inject('cart')
const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})
const onClickPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}
const onChangeSelect = (e) => {

  filters.sortBy = e.target.value
}

const onChangeSearch = (e) => {
  filters.searchQuery = e.target.value
}

const addToFavorites = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
      }
      item.isFavorite = true
      const { data } = await instance.post(`/favorites`, obj)
      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await instance.delete(`/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await instance.get(`/favorites`)
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)
      if (!favorite) {
        return item
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await instance.get(`/items`, { params })
    items.value = data.map((obj) => {
      return {
        ...obj,
        isFavorite: false,
        favoriteId: null,
        isAdded: false,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []
  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }))
})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }))
})

watch(filters, fetchItems)
</script>

<template>
  <div class="flex justify-between items-center">
    <h2 class="text-3xl font-bold mx-10 mb-8">Все кроссовки</h2>
    <div class="flex gap-6">
      <select
        @change="onChangeSelect"
        class="py-2 px-3 border border-slate-300 rounded-lg outline-none focus:border-slate-500"
      >
        <option value="name">По названию</option>
        <option value="price">По цене(дешевые)</option>
        <option value="-price">По цене(дорогие)</option>
      </select>
      <div class="relative">
        <img src="/search.svg" alt="search" class="absolute top-5 left-2.5 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Поиск..."
          class="border border-slate-300 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-slate-500"
          @input="onChangeSearch"
        />
      </div>
    </div>
  </div>
  <div class="mt-10">
    <CardList :items="items" @add-to-favorites="addToFavorites" @add-to-cart="onClickPlus" />
  </div>
</template>
