<template>
  <div class="section section-recommendation">
    <div class="section-title">Рекомендуем {{ items.length }}</div>
    <div class="section-text">
      При оформлении заказа по телефону сообщите оператору кодовое слово «САЙТ».
      Товары из категории «Рекомендуем» суммируются между собой. При выборе блюд
      из данной категории вы не сможете воспользоваться другими скидками,
      акциями, бонусами и подарками
    </div>
    <div class="section-items">
                    <CreateSet/>
      <Item v-for="item in items" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import CreateSet from './CreateSet'
export default {
  name: "SectionRecommendation",
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
        {
          id: 5,
          price: 1190,
          gram: 1675,
          title: "Набор «Праздник»",
          text: "8 роллов: «Нежный», «Сиоми», «Лава маки», «Фрай», «Каппа маки», «Ямаха», «Джинджер», «Цезарь ролл»",
          img: "https://imagiro.ru/media/uploads/catalog_large/8-Prazdnik-1400_1400-edit.jpg",
          number:0,
        },
        {
          id: 6,
          price: 1090,
          gram: 1385,
          title: "Набор «7 роллов»",
          text: "7 роллов: «Сендвич с курицей», «Фудзи», «Япошка», «Императорский с курицей», «Цезарь ролл», «Эби маки», «Каппа маки»",
          img: "https://imagiro.ru/media/uploads/catalog_large/7-rollov-1400_1400-edit_1.jpg",
          number:0,
        },
      ],
    };
  },
  components: {
    Item,
    CreateSet,
  },
};
</script>
<style>
</style>