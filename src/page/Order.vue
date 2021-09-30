<template>
  <div class="order">
    <div class="order-nav">
      <div class="order-home">
        <router-link :to="{ name: 'main' }">Вернуться в меню</router-link>
      </div>
      <div class="order-basket">
        <router-link :to="{ name: 'basket' }">Корзина</router-link>
      </div>
      <div v-if="getOrderedItems.length<=0" class="order-form">
        <a href="#">Оформить заказ</a>
      </div>
      <div v-else class="order-form">
        <router-link :to="{ name: 'form' }">Оформить заказ</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Order",
  computed: {
    ...mapGetters(["getOrderedItems"]),
  },
};
</script>

<style>
.order-nav {
  display: flex;
  padding:15px 0px;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  margin-bottom:60px;
  position:fixed;
  width:100%;
  background:white;
  z-index:2;
}
.order-nav a {
  padding: 5px 8px;
  font-size: 20px;
  color:black;
}

.order-nav a.router-link-active{
  color:goldenrod;
}
.order-home a.router-link-active{
  color:black;
}

@media (min-width:1000px){
.order-nav a:hover {
  color: crimson;
}
}
@media(max-width:650px){
    .order-nav a{
        font-size:12px;
    }
}
</style>
