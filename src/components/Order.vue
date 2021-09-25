<template>
  <div class="order-menu">
    <div class="order-menu-panel">
      <p class="order-menu-price">{{ getTotalPrice }} ₽</p>
      <img class="order-menu-bag" src="../assets/bag.svg" />
      <div class="order-menu-bag-number">{{ getTotalNumber }}</div>
      <a class="order-menu-btn" v-if="getOrderedItems.length === 0" href="#"
        >Корзина</a
      >
      <router-link
        v-else
        :to="{name:'basket'}"
        class="order-menu-order"
        >Корзина</router-link
      >
    </div>
    <div class="order-menu-wrap">
      <div class="order-menu-list">
        <div class="order-warning" v-if="getOrderedItems.length <= 0">
          Корзина пуста
        </div>
        <OrderItem
          v-for="item in getOrderedItems"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from "./OrderItem";
import { mapGetters } from "vuex";
export default {
  name: "Order",
  computed: {
    ...mapGetters(["getOrderedItems", "getTotalPrice", "getTotalNumber"]),
  },
  methods: {},
  mounted() {
    console.log(this.getTotalPrice);
  },
  components: {
    OrderItem,
  },
};
</script>

<style>
.order-menu {
  display: flex;
  font-size: 16px;
  flex-direction: column;
  position: relative;
  padding-top: 5px;
}
.order-menu-btn{
    padding-left: 10px;
  padding-right: 18px;
  color:black
}
.order-menu-bag {
  width: 25px;
  position: relative;
  top: -6px;
}
.order-menu-bag-number {
  font-size: 16px;
  padding-right: 20px;
}
.order-menu-wrap {
  display: none;
}

.order-menu-panel {
  z-index: 1;
  display: flex;
  background: white;
  border-top-left-radius: 20px;
  padding-left: 10px;
  padding:10px 0px;
}

.order-menu-order {
  padding-left: 10px;
  padding-right: 18px;
  color:black;
}
.order-menu-list {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  max-height: 550px;
  top: 10px;
  position: absolute;
  padding-top: 40px;
  padding-right: 10px;
  padding-left: 20px;
  background: white;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 20px;
}
.order-menu-list-top,
.order-menu-list-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
}
.order-item-remove {
  font-size: 28px;
  cursor: pointer;
}
.order-item-number{
  padding:0 3px;
}
.order-item-btn {
  font-size: 28px;
  background: none;
    display:block;
  width:25px;
}
.order-warning {
  padding-bottom: 20px;
}
@media (min-width: 1000px) {
  .order-menu:hover .order-menu-wrap {
    display: block;
  }
  .order-menu:hover .order-menu-panel {
    box-shadow: -5px 0px 0px -5px rgba(34, 60, 80, 0.6);
  }
}
@media(max-width:650px){
  .order-menu{
    font-size:16px;
  }
  .order-menu-bag{
    width:20px;
  }
  .order-menu-bag-number{
    padding-right:5px;
  }
}
</style>