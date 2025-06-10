<script setup>
import instance from '@/assets/instance'
import { computed, inject, ref } from 'vue'
import CartItemList from './cart-item-list.vue'
import DrawerHead from './drawer-head.vue'
import InfoBlock from './info-block.vue'

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
})

const { cart, closeDrawer } = inject('cart')

const isCreating = ref(false)
const orderId = ref(null)

const createOrder = async () => {
  try {
    isCreating.value = true
    const { data } = await instance.post(`/orders`, {
      items: cart.value.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        imageUrl: item.imageUrl,
      })),
      totalPrice: props.totalPrice.value,
    })

    cart.value = []
    orderId.value = data.id
    return data
  } catch (error) {
    console.error('Error creating order:', error)
    alert('Произошла ошибка при создании заказа. Пожалуйста, попробуйте снова.')
  } finally {
    isCreating.value = false
  }
}

const cartIsEmpty = computed(() => {
  return cart.value.length === 0
})

const buttonDisabled = computed(() => {
  return isCreating.value || props.totalPrice.value === 0 || cartIsEmpty.value
})
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="fixed top-0 right-0 h-full w-1/4 bg-white z-20 p-8">
    <DrawerHead />

    <div v-if="!totalPrice || orderId" class="flex h-full items-center">
      <InfoBlock
        v-if="!totalPrice && !orderId"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        imageUrl="/package-icon.png"
      />
      <InfoBlock
        v-if="orderId"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId} скоро будет передан курьерской доставке.`"
        imageUrl="/order-success-icon.png"
      />
    </div>

    <div v-else>
      <CartItemList />

      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed border-slate-300"></div>
          <b>{{ totalPrice }} руб</b>
        </div>
        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-dashed border-slate-300"></div>
          <b>{{ vatPrice }} руб</b>
        </div>
        <button
          :disabled="buttonDisabled"
          class="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition duration-300 disabled:bg-slate-300 cursor-pointer disabled:cursor-not-allowed mt-4"
          @click="createOrder"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>
