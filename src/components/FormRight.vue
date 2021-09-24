<template>
  <div class="form-right">
    <div class="form-right-title">Оформление заказа</div>
    <div class="form-right-order-title">Ваш заказ</div>
    <div class="form-right-items">
      <div
        class="form-right-item"
        v-for="item in getOrderedItems"
        :key="item.id"
      >
        <div class="form-right-item-title">{{ item.title }}</div>
        <div class="form-right-block">
          <div class="form-right-item-number">{{ item.number }} шт.</div>
          <div class="form-right-item-price">{{ item.price }} ₽</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "FormRIght",
  computed: {
    ...mapGetters(["getOrderedItems"]),
  },
};
</script>

<style>
.form-right {
  position: fixed;
  right:0;
  padding-right: 10px;
  padding-left:10px;
  padding-top:80px;
}
.form-right-title {
  font-size: 40px;
  margin-bottom: 40px;
  display: none;
}
.form-right-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-right-item {
  display: flex;
  justify-content: space-between;
  width: 400px;
  font-size: 16px;
  margin-bottom: 10px;
}
.form-right-block {
  display: flex;
}
.form-right-item-number {
  padding-right: 10px;
}
.form-right-order-title {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>