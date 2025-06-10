<script setup>
import { defineEmits } from 'vue'
import MainCard from './main-card.vue'

defineProps({
  items: Array,
  isFavorites: Boolean
})
const emit = defineEmits(['addToFavorites', 'addToCart'])
</script>

<template>
  <div v-auto-animate class="grid grid-cols-4 gap-5">
    <MainCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :is-favorite="item.isFavorite"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorites', item)"
      :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
      :is-added="item.isAdded"
    />
  </div>
</template>
