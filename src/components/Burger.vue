<template>
  <div :class="{ burger: true, active: getBurgerOpen }">
    <ul class="burger-menu">
      <li class="burger-item" @click="scroll('.section-recommendation')">
        Рекомендуем
      </li>
      <li class="burger-item" @click="scroll('.section-benefit')">Выгода</li>
      <li class="burger-item" @click="scroll('.section-rolls')">
        Роллы и суши
      </li>
    </ul>
  </div>
</template>

<script>
import secrollToElement from "scroll-to-element";
import { mapGetters } from "vuex";
export default {
  name: "Burger",
  computed: {
    ...mapGetters(["getBurgerOpen"]),
  },
  methods: {
    scroll(name) {
      secrollToElement(name, {
        offset: 0,
        duration: 500,
      });
    },
  },
};
</script>

<style>
.burger {
  position: fixed;
  top:50px;
  display: none;
  right:20px;
  background: white;
  border-radius:20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  z-index:2;
}
.burger.active {
  display: block;
}
.burger-item {
  padding: 15px 10px;
  font-size: 20px;
  cursor:pointer;
}
</style>