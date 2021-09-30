<template>
  <div class="item">
    <div class="item-img-block">
      <img class="item-img" :src="item.img" />
      <div class="item-img-text">
        <span>{{item.gram}} гр</span>
        {{ item.text }}
        </div>
    </div>

    <div class="item-content">
      <div class="item-title">{{ item.title }}</div>
      <div class="item-text">{{ item.text }}</div>
      <div class="item-row">
        <div class="item-price">{{ item.price }} ₽</div>
        <div class="item-order-btn" @click="addOrderedItems(item)">
          Заказать
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      isVisibleText: true,
    };
  },
  methods: {
    ...mapActions(["addOrderedItems"]),
  },
};
</script>

<style>
.item {
  flex-basis: 25%;
  padding: 5px 10px 5px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}
.item-img-block {
  position: relative;

}
.item-img {
  display: block;
  width: 100%;
}
.item-img-text {
  position: absolute;
    padding:5px;
  color: white;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  transition: 0.2s;
  height: 100%;
  top:0;
  line-height:2;
  font-size:12px;
}
.item-img-text span{
  display:block;
  margin-bottom:20px;
}
.item-title {
  margin-top:10px;
  margin-bottom: 15px;
  font-size: 18px;
}
.item-text {
  display: none;
  color: grey;
  line-height: 2;
}
.item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
.item-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.item-price {
  font-size: 20px;
  padding-bottom: 7px;
}
.item-order-btn {
  padding: 10px;
  background: lime;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  transition: 0.2s;
}
.item-order-btn:hover {
  background: rgba(20, 160, 20);
  color: black;
}

@media (min-width: 1000px) {
  .item-img-block:hover .item-img-text {
    opacity: 1;
  }
}
</style>
