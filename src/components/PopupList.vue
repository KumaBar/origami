<template>
  <div :class="{ pList: true, lock: getNumber === getSelectedItems.length }">
    <PopupItem v-for="item in getPopupItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PopupItem from "./PopupItem.vue";
export default {
  name: "PopupList",
  computed: {
    ...mapGetters(["getPopupItems", "getNumber", "getSelectedItems"]),
  },
  components: {
    PopupItem,
  },
};
</script>



<style>
.pList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.lock {
  opacity: 0.5;
}
@media (max-width: 640px) {
  .pList {
    justify-content: space-between;
    flex-wrap:no-wrap;
  }
  .pItem{
    padding:5px;
    margin:0;
  }
  .p-item-title{
    width:100%;
    justify-content: space-between;
    font-size:12px;
  }
}
@media (max-width:400px){

}
</style>