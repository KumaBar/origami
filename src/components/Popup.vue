<template>
  <div @click="closePopup" :class="{popupWindow:true,active:getOpen}">
    <div class="popup-content">
    <button @click.stop="closePopup">Close</button>
      <img class="popup-img" :src="getDataItem.img" />
      <div class="popup-title">{{ getDataItem.title }}</div>
      <div class="popup-gram">{{ getDataItem.gram }}</div>
      <div class="popup-text">{{ getDataItem.text }}</div>
      <div class="popup-row">
        <div class="popup-price">{{ getDataItem.price }}</div>
        <div class="popup-order-btn">Добавить</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
  name: "Popup",
  computed: {
    ...mapGetters(["getDataItem","getOpen"]),
  },
  methods: {
      ...mapActions(['closePopup'])
  },
};
</script>

<style>
.popupWindow {
  position:relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display:none;
  top: 0px;
}
.popupWindow.active {
  overflow: hidden;
  display:block;
}
.popup-content {
    max-width:400px;
    margin:0 auto;
}

.popup-img{
    display:block;
    width:100%;
}
</style>
