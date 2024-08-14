<template>
  <div class="product-container" v-for="product in cartItems" :key="product.id">
    <img class="product-image" :src="product.imageName"/>
    <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
    </div>
    <button class="remove-button">Remove from cart</button>
  </div>
  <button class="checkout-button">Proceed to checkout</button>
</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ['cartItems']
}
</script>

<!-- 
  READ: The reason we don't place the v-if in here is because that logic 
  pertains to the shopping cart page. One way to think about it is, the 
  whole point of this component is to be reusable. So if we wanted to reuse 
  the shopping cart list elsewhere, we might not want/need the same v-if 
  logic in that page. 
-->