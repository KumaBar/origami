<template>
  <div class="main">
    <Navigation />
    <Popup/>
    <div class="container">
      <List />
    </div>
  </div>
</template>

<script>
import Popup from "../components/Popup";
import Navigation from "../components/Navigation";
import List from "../components/List";
export default {
  name: "Main",
  components: {
    Navigation,
    List,
    Popup,
  },
};
</script>

<style>
</style>
