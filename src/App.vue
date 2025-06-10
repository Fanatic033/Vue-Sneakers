<script setup>
import { computed, provide, ref, watch } from 'vue'
import MainHeader from './components/main-header.vue'
import Drawer from './components/drawer.vue'

const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(() => {
  return cart.value.reduce((acc, items) => acc + items.price, 0)
})

const vatPrice = computed(() => {
  return Math.round((totalPrice.value * 5) / 100)
})

const openDrawer = () => {
  drawerOpen.value = true
}

const closeDrawer = () => {
  drawerOpen.value = false
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}


watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  {
    deep: true,
  },
)

provide('cart', {
  cart,
  openDrawer,
  closeDrawer,
  addToCart,
  removeFromCart,
})
</script>
<template>
  <Drawer
    v-if="drawerOpen"
    :total-price="totalPrice"
    :vat-price="vatPrice"
  />

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <MainHeader @open-drawer="openDrawer" :total-price="totalPrice" />

    <div class="p-10">
      <router-view />
    </div>
  </div>
</template>
