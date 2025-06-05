<script setup>
import like1 from '/like-1.svg'
import plus from '/plus.svg'
import checked from '/checked.svg'
import like2 from '/like-2.svg'

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
})
</script>

<template>
  <div
    class="relative border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white"
  >
    <img
      :src="isFavorite ? like2 : like1"
      alt="like 1"
      class="absolute top-8 left-8 bg-white rounded-full p-1"
      @click="onClickFavorite"
    />
    <img :src="imageUrl" alt="sneakers 1" />
    <p class="mt-2">{{ title }}</p>
    <div class="flex items-center justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-500">Цена:</span>
        <b>{{ price }} руб.</b>
      </div>
      <img :src="isAdded ? checked : plus" alt="plus" @click="onClickAdd" />
    </div>
  </div>
</template>
