<script setup>
import like1 from '../assets/public/like-2.svg'
import sneakers1 from '../assets/public/sneakers/sneakers-1.jpg'
import plus from '../assets/public/plus.svg'
</script>

<template>
  <div
    class="relative border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 bg-white"
  >
    <img :src="like1" alt="like 1" class="absolute top-8 left-8" />
    <img :src="sneakers1" alt="sneakers 1" />
    <p class="mt-2">Мужские кроссовки Nike Air Max 270</p>
    <div class="flex items-center justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-500">Цена:</span>
        <b>12000 руб.</b>
      </div>
      <img :src="plus" alt="plus" />
    </div>
  </div>
</template>
