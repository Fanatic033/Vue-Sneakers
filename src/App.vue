<script setup>
import { onMounted, ref, watch, reactive } from 'vue'
import axios from 'axios'
import MainHeader from '@/components/main-header.vue'
import CardList from '@/components/card-list.vue'
import Drawer from '@/components/drawer.vue'

const items = ref([])

const filters = reactive({
  sortBy: 'title',
  searchQuery: '',
})

const onChangeSelect = (e) => {
  filters.sortBy = e.target.value
}

const onChangeSearch = (e) => {
  filters.searchQuery = e.target.value
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://19e640ebd7605531.mokky.dev/items`, { params })
    items.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  fetchItems()
})

watch(filters, fetchItems)
</script>
<template>
  <!-- <Drawer /> -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <MainHeader />

    <div class="p-10">
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
      <CardList :items="items" class="mt-10" />
    </div>
  </div>
</template>
