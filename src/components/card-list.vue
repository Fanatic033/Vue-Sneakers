<script setup>
import { defineEmits } from 'vue'
import MainCard from './main-card.vue'

defineProps({
  items: Array,
})
const emit = defineEmits(['addToFavorites'])
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <MainCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :onClickFavorite="() => emit('addToFavorites', item)"
      :is-favorite="item.isFavorite"
    />
  </div>
</template>
