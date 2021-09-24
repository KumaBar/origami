<template>
  <div class="section section-rolls">
    <div class="section-title">Роллы и суши {{ items.length }}</div>
    <div class="section-text">
      Будем рады накормить вас вкусными роллами и суши :)
    </div>
    <div class="section-items">
      <Item v-for="item in items" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "SectionRolls",
  data() {
    return {
      items: [
        {
          id: 1,
          price: 1290,
          gram: 1805,
          title: "Набор «На всех»",
          text: "9 роллов: «Императорский с курицей», «Лава крабс», «Каппа маки», «Япошка», «Краш», «Сендвич с курицей», «Спешл», «Грин маки», «Джинджер»",
          img: "https://imagiro.ru/media/uploads/catalog_large/9-Na-vseh-1400_1400-edit.jpg",
          number:0,
        },
        {
          id: 2,
          price: 1390,
          gram: 1955,
          title: "Набор «Мало ли»",
          text: "9 роллов: «Сендвич ролл с лососем», «Вега хот», «Ясай», «Лава крабс», «Лава цезарь», «Императорский с курицей», «Эби стронг», «Дикий бекон», «Три сыра»",
          img: "https://imagiro.ru/media/uploads/catalog_large/9-MaloLI-1400_1400.jpg",
          number:0,
        },
        {
          id: 3,
          price: 1290,
          gram: 1130,
          title: "Набор «5 популярных»",
          text: "5 роллов: «Филадельфия лайт классика», «Имагиро», «Лава кинг», «Сендвич ролл с лососем», «Феникс»",
          img: "https://imagiro.ru/media/uploads/catalog_large/5-populyarnih-1400_1400.jpg",
          number:0,
        },
        {
          id: 4,
          price: 1390,
          gram: 1420,
          title: "Набор «Хиты»",
          text: "5 роллов: «Филадельфия лайт классика», «Имагиро», «Лава кинг», «Сендвич ролл с лососем», «Феникс»",
          img: "https://imagiro.ru/media/uploads/catalog_large/5-populyarnih-1400_1400.jpg",
          number:0,
        },
      ],
    };
  },
  components: {
    Item,
  },
};
</script>
