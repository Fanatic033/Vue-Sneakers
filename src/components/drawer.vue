<script setup>
import DrawerHead from './drawer-head.vue'
import CartItemList from './cart-item-list.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="fixed top-0 right-0 h-full w-1/4 bg-white z-20 p-8">
    <DrawerHead />
    <CartItemList />

    <div class="flex flex-col gap-4 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed border-slate-300"></div>
        <b>12000 руб</b>
      </div>
      <div class="flex gap-2">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed border-slate-300"></div>
        <b>600 руб</b>
      </div>
      <button
      class="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition duration-300 disabled:bg-slate-300 cursor-pointer disabled:cursor-not-allowed mt-4"
    >
      Оформить заказ
    </button>
    </div>

  </div>
</template>
