<template>
  <div :class="{ pItem: true, selected: item.selected }">
    <div :class="{ pItemImg: true }">
      <img :src="item.img" />
      <div :id="item.id" class="p-img-text" @click="toggleSelect(item)">
        {{ gram }} <br />
        {{ item.text }}
      </div>
    </div>
    <div class="p-item-title">
      {{ item.title }}
      <button @click="visibleText(item.id)">
        <img src="../assets/question.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PopupItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    ...mapActions(["toggleSelect"]),
    visibleText(id) {
      if (window.screen.width <= 1000) return;
      if (this.item.open === true) {
        document.getElementById(`${id}`).style.opacity = "0";
        this.item.open = false;
      } else {
        document.getElementById(`${id}`).style.opacity = "1";
        this.item.open = true;
      }
      console.log(this.item.open);
    },
  },
  computed: {
    ...mapGetters(["getSelectedNumber"]),
    gram() {
      if (this.item.gr) {
        return this.item.gr + "гр";
      } else {
        return "";
      }
    },
  },
};
</script>


<style>
.selected {
  background: lime;
}
.pItem {
  flex-basis: 25%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 190px;
  margin: 10px;
}
.pItem button{
  background:none;
}
.pItemImg {
  position: relative;
  cursor: pointer;
  width: 120px;
}
.pItemImg img {
  display: block;
  width: 120px;
}
.p-img-text {
  top: 0;
  left: 0;
  height: 100%;
  max-width: 120px;
  padding: 5px;
  position: absolute;
  font-size: 10px;
  color: white;
  line-height: 1.5;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: 0.2s;
  overflow: hidden;
}
.p-item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
}
.p-item-title img {
  cursor: pointer;
  display: block;
  width: 18px;
}
</style>