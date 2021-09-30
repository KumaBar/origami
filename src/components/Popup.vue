<template>
  <div id="popup" :class="{ pWrap: true, open: getOpenPopup }">
    <div class="p-content">
      <div
        class="p-close"
        @click="
          closePopup();
          enableScroll();
          clearSelected();
        "
      >
        ×
      </div>
      <div class="p-content-title">Собери сам {{ getNumber }} шт. за {{getNumberPrice}} ₽</div>
      <div class="p-content-btns create-left-btns">
        <div
          :class="{ pBtn: true, pick: getNumber === 4 }"
          @click="changeNumber(4)"
        >
          4 шт
        </div>
        <div
          :class="{ pBtn: true, pick: getNumber === 6 }"
          @click="changeNumber(6)"
        >
          6 шт
        </div>
        <div
          :class="{ pBtn: true, pick: getNumber === 8 }"
          @click="changeNumber(8)"
        >
          8 шт
        </div>
      </div>
      <PopupList />
      <div v-if="getNumber!==getSelectedItems.length" class='p-selected'>Выбрано {{getSelectedItems.length}} из {{getNumber}}</div>
      <div v-else class="p-order" @click="order(); ">Заказать</div>
    </div>
  </div>
</template>

<script>
import { enableBodyScroll } from "body-scroll-lock";
import PopupList from "./PopupList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Popup",

  computed: {
    ...mapGetters(["getOpenPopup", "getNumber","getSelectedItems" ,"getNumberPrice"]),
  },
  methods: {
    ...mapActions(["closePopup","clearSelected", "changeNumber","addOrderedItems","order","addOrderCreateItem"]),
    enableScroll() {
      enableBodyScroll("#popup");
    },
  },
  components: {
    PopupList,
  },
};
</script>

<style>
.pick{
  background-color:lime;
}
.pWrap {
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: none;
  overflow: auto;
}
.pWrap.open {
  display: block;
}
.p-close {
  position: absolute;
  font-size: 60px;
  color: lime;
  top: -10px;
  right: 10px;
  cursor: pointer;
}
.p-content {
  background: white;
  max-width: 800px;
  padding: 20px;
  padding-top: 40px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 25px;
  z-index: 11;
  position: relative;
}
.p-content-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
  text-align: center;
}
.p-content-btns {
  border: 1px solid lime;
  display: flex;
  max-width:180.13px;
  margin: 0 auto;
  margin-bottom:20px;
}
.pBtn {
  padding: 15px;
  cursor: pointer;
  transition: 0.2s;
}
.p-selected{
   max-width: 180px;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  margin-top:20px;
   color: lime;
   font-size: 20px;
  border-radius: 5px;
  border:1px solid lime;
}
.p-order {
  max-width: 120px;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  margin-top:20px;
  background: lime;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  cursor:pointer;
}
@media (max-width: 430px) {
  .p-close {
    right: 0;
  }
}
</style>