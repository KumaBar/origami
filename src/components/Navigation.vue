<template>
  <div class="navigation">
    <ul class="menu">
      <li class="menu-item">
        <button @click="scroll('.section-recommendation')">Рекомендуем</button>
      </li>
      <li class="menu-item">
        <button @click="scroll('.section-benefit')">Выгода</button>
      </li>
      <li class="menu-item">
        <button @click="scroll('.section-rolls')">Роллы и суши</button>
      </li>
      <li class="menu-item">
        <button>Четыре</button>
      </li>
      <li class="menu-item">
        <button>Пять</button>
      </li>
    </ul>
    <Order />
    <div class='menu-btn'>BLOCK</div>
  </div>
</template>

<script>
import secrollToElement from "scroll-to-element";
import Order from "./Order";

export default {
  name: "Navigation",
  methods: {
    scroll(name) {
      secrollToElement(name, {
        offset: 0,
        duration: 500,
      });
    },
  },
  components: {
    Order,
  },
};
</script>

<style>
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:fixed;
  width:100%;
  background:white;
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
}
.menu {
  display: flex;
  padding: 10px;
}
.menu-item {
  padding: 5px 8px;
}
.menu-item button {
  font-size: 16px;
  background: none;
}

.menu-btn{
  display:none;
}

@media (max-width:1000px){
  .navigation{
    justify-content:flex-end;
  }
  .menu{
    display:none;
  }
  .menu-btn{
  display:block;
}
}
</style>
