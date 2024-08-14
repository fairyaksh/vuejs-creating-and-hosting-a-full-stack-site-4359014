<template>
  <h1> Shopping Cart </h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :cartItems="cartItems"/>
  </div>
    <div v-else>
    <h3> You currently have no items in your cart. </h3>
  </div>
</template>

<script>
import { cartItems } from '../temp-data';
import ShoppingCartList from '../components/ShoppingCartList.vue'

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartList
  },
  data() {
    return {
      cartItems,
    }
  }
}
</script>