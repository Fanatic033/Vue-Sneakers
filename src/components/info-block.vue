<script setup>
defineProps({
  imageUrl: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img :src="imageUrl" alt="box" height="80" width="80" />
    <h2 class="mt-2 text-2xl font-medium">{{ title }}</h2>
    <p class="mt-2 text-slate-400">{{ description }}</p>
  </div>
</template>
