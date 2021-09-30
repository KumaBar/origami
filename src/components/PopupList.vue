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
  .pLIst {
    justify-content: space-between;
  }
}
</style>