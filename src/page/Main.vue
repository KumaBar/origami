<template>
  <div class="main">
    <Navigation />
    <Burger />

    <div class="container">
      <List />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import Burger from "../components/Burger";
import List from "../components/List";
export default {
  name: "Main",
  components: {
    Navigation,
    Burger,
    List,
  },
};
</script>

