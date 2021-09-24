<template>
  <div class="item">
    <img class="item-img" :src="item.img" />
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
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
.item {
  max-width: 350px;
  padding: 5px 10px 5px;
  display: flex;
  flex-direction: column;
}
.item-img {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
}
.item-title {
  margin-bottom: 15px;
  font-size: 18px;
  cursor: pointer;
}
.item-text {
  display: block;
  color: grey;
  line-height: 2;
}
.item-content{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  height:100%;
  width:100%;
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
</style>
