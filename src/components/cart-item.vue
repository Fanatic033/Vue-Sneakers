<script setup>

const emit = defineEmits(['onClickRemove'])

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
})
</script>

<template>
  <div class="flex items-center gap-4 border border-slate-200 p-4 rounded-xl justify-between">
    <img :src="imageUrl" :alt="title" class="w-20 h-16 rounded-lg" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ price }} руб</b>
        <img
          src="/close.svg"
          alt="close"
          class="cursor-pointer opacity-40 hover:opacity-100 transition duration-300"
          @click="emit('onClickRemove')"
        />
      </div>
    </div>
  </div>
</template>
