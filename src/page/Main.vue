<template>
  <div :class="{main:true,pOpen:getOpenPopup}">
    <Popup />
    <Navigation />
    <Burger />
    <List />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Burger from "../components/Burger";
import List from "../components/List";
import Popup from "../components/Popup";
import { mapGetters } from 'vuex';
export default {
  name: "Main",
  components: {
    Navigation,
    Burger,
    List,
    Popup,
  },
  computed:{
    ...mapGetters(['getOpenPopup'])
  }
};
</script>

<style>

</style>