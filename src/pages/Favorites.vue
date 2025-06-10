<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/assets/instance'
import CardList from '../components/card-list.vue'

const favorites = ref([])

const fetchFavorites = async () => {
  try {
    const { data } = await instance.get(`/favorites?_relations=items`)
    favorites.value = data.map(obj => obj.item)
  } catch (error) {
    console.log(error)
  }

}

onMounted(() => {
  fetchFavorites()
})
</script>

<template>
  <h2 class="text-3xl font-bold mx-10 mb-8">Мои закладки</h2>
    <CardList :items="favorites" is-favorites />

</template>