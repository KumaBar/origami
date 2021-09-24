<template>
  <div class="section section-benefit">
    <div class="section-title">Выгода {{ items.length }}</div>
    <div class="section-text">
      Выгода 8 Эти супер выгодные позиции вы можете заказать с воскресенья по
      четверг (кроме пятницы, субботы и праздничных дней). При оформлении заказа
      по телефону сообщите оператору кодовое слово «Выгода». Не суммируется с
      другими скидками, акциями, бонусами и подарками
    </div>
    <div class="section-items">
      <Item v-for="item in items" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "SectionRecommendation",
  data() {
    return {
      items: [
        {
          id: 1,
          price: 329 ,
          gram: 360,
          title: "Два сендвич ролла с курицей",
          text: "Копченая курица, сыр, рис, соус «майонезно-чесночный», нори, соус «Апельсиновый спайси».",
          img: "https://imagiro.ru/media/uploads/catalog_large/%D1%81%D0%B5%D0%BD%D0%B4%D0%B2%D0%B8%D1%87_%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0_j7yjPIL_1.jpg",
          number:0,
        },
        {
          id: 2,
          price: 199 ,
          gram: 235,
          title: "Лава крабс",
          text: "Снежный краб, сливочный сыр, огурец, соус «Лава», кунжут, рис, нори",
          img: "https://imagiro.ru/media/uploads/catalog_large/%D0%9B%D0%B0%D0%B2%D0%B0-%D0%BA%D1%80%D0%B0%D0%B1%D1%81_1.jpg",
          number:0,
        },
        {
          id: 3,
          price: 329 ,
          gram: 480,
          title: "Два Императорских ролла с курицей",
          text: "Курица копченая, сливочный сыр, огурец, рис, нори, темпура, соус «Императорский». Соус подается в отдельной баночке.",
          img: "https://imagiro.ru/media/uploads/catalog_large/%D0%B8%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B8_%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B0_nm4xgyN.jpg",
          number:0,
        },
        {
          id: 4,
          price: 199 ,
          gram: 190,
          title: "Тортилья с копченой курицей",
          text: "Копченая курица , огурец, сливочный сыр, зеленый лук, сырная лепешка.",
          img: "https://imagiro.ru/media/uploads/catalog_large/%D0%A2%D0%BE%D1%80%D1%82%D0%B8%D0%BB%D1%8C%D1%8F-%D1%81-%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9_v34eoFG_1.jpg",
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
