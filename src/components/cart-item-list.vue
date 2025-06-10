<script setup>
import CartItem from './cart-item.vue'
import { inject } from 'vue'

  const { cart, removeFromCart } = inject('cart')
</script>


<template>
  <div class="flex flex-col  flex-1 gap-4" v-auto-animate>
    <CartItem v-for="item in cart" :key="item.id"  :imageUrl="item.imageUrl" :title="item.title" :price="item.price" @onClickRemove="() => removeFromCart(item)"/>
    </div>
</template>
