<template>
  <div class="basket">
    <div class="basket-title">Корзина</div>
    <div class="baskset-warning" v-if="getOrderedItems.length <= 0">
      Корзина пуста
    </div>
    <div class="basket-list">
      <BasketItem v-for="item in getOrderedItems" :key="item.id" :item="item" />
    </div>
    <div class="basket-price">Сумма вашего заказа: {{ getTotalPrice }} ₽</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BasketItem from "./BasketItem";
export default {
  name: "Basket",
  computed: {
    ...mapGetters(["getOrderedItems", "getTotalPrice"]),
  },
  components: {
    BasketItem,
  },
};
</script>
<style>
.basket-title {
  font-size: 40px;
  padding-left: 10px;
  margin-bottom: 20px;
}
.basket-price {
  font-size: 40px;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 40px;
}
.baskset-warning {
  text-align: center;
  font-size: 20px;
}

@media (max-width: 1000px) {

  .basket-item-config {
    max-width: 250px;
  }
}
@media (max-width: 650px){
  .basket-item{
    padding:5px 0px;
  border-bottom:1px solid rgba(0,0,0,0.1);
  }
  .basket-item-row{
    margin-left:0;
    margin-right:0;
    flex-direction: column;
  }
  .basket-item-img{
    width:200px;
  }
    .basket-item-text{
    font-size:14px;
  }
  .basket-item-config{
    font-size:20px;
    margin-top:20px;
    margin-bottom:30px;
  }
    .basket-price {
    font-size: 20px;
  }
} 
</style>