<script setup>
import logo from '/logo.png'
import cart from '/cart.svg'
import heart from '/heart.svg'
import profile from '/profile.svg'

const emit = defineEmits(['openDrawer'])

defineProps({
  totalPrice: Number,
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img :src="logo" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold">Vue Sneakers</h2>
          <p class="text-sm text-slate-500">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black transition-all duration-300"
        @click="() => emit('openDrawer')"
      >
        <img :src="cart" alt="cart" />
        <span>{{ totalPrice }} руб.</span>
      </li>

      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black transition-all duration-300">
          <img :src="heart" alt="heart" />
          <span>Закладки</span>
        </li>
      </router-link>

      <li class="flex items-center gap-3 text-gray-500">
        <img :src="profile" alt="profile" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
