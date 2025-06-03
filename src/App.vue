<script setup>
import MainHeader from './components/main-header.vue'
import MainCard from './components/main-card.vue'
</script>
<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <MainHeader />

    <div class="p-10">
      <h2 class="text-3xl font-bold mx-10 mb-8">Все кроссовки</h2>
      <div class="grid grid-cols-4 gap-5">
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </div>
  </div>
</template>
