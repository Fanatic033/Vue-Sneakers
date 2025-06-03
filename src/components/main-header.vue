<script setup>
import logo from '../assets/public/logo.png'
import cart from '../assets/public/cart.svg'
import heart from '../assets/public/heart.svg'
import profile from '../assets/public/profile.svg'
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <div class="flex items-center gap-4">
      <img :src="logo" alt="logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold">Vue Sneakers</h2>
        <p class="text-sm text-slate-500">Магазин лучших кроссовок</p>
      </div>
    </div>

    <ul class="flex items-center gap-10">
      <li class="flex items-center gap-3 text-gray-500">
        <img :src="cart" alt="cart" />
        <span>1205 руб.</span>
      </li>
      <li class="flex items-center gap-3 text-gray-500">
        <img :src="heart" alt="heart" />
        <span>Закладки</span>
      </li>
      <li class="flex items-center gap-3 text-gray-500">
        <img :src="profile" alt="profile" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
