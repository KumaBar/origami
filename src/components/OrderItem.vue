<template>
  <div class="order-menu-list-item">
    <div class="order-menu-list-top">
      <div class="order-item-title">{{ item.title }}</div>
      <div class="order-item-remove" @click="removeOrderedItems(item)">×</div>
    </div>
    <div class="order-menu-list-bottom">
      <img src="../assets/minus.svg" class="order-item-btn" @click="decrementNumber(item)"/>
      <span class='order-item-number'>{{ item.number }}</span>
      <img src="../assets/plus.svg" class="order-item-btn" @click="incrementNumber(item)"/>
      <div class="order-item-price">{{  price}} ₽</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "OrderItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  computed: {
    price() {
      return this.item.price * (this.item.number <= 0 ? 1 : this.item.number);
    },
  },
  methods: {
    ...mapActions(["incrementNumber", "decrementNumber","removeOrderedItems"]),
  },
};
</script>