<template>
  <div class="list">
    <Slider/>
    <SectionRecommendation />
    <SectionBenefit />
    <SectionRolls />
  </div>
</template>

<script>
import Slider from './Slider'
import SectionRecommendation from "./SectionRecommendation";
import SectionBenefit from "./SectionBenefit";
import SectionRolls from "./SectionRolls";
export default {
  name: "List",
  components: {
    SectionRecommendation,
    SectionBenefit,
    SectionRolls,
    Slider,
  },
  methods: {},
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
}
.section-title {
  font-size: 24px;
  margin-top: 60px;
  margin-bottom: 20px;
  padding: 0px 5px;
}
.section-text {
  padding: 0px 5px;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
}
.section-items {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1000px) {
  .section-title {
    font-size: 16px;
  }
  .section-text {
    font-size: 12px;
  }
  .section-items {
    flex-direction: column;
  }
  .item {
    width: 100%;
    max-width: none;
    flex-direction:row;
  }
  .item-content {
    display:block;
    padding-left: 10px;
  }
  .item-title {
    font-size: 12px;
  }
  .item-price {
    font-size: 12px;
  }
  .item-order-btn {
    font-size: 12px;
  }
    .item-img {
    max-width: 150px;
    max-height: 150px;
  }
  .item-text {
    display:block;
    font-size: 10px;
  }
  .item-row {
    padding-top: 10px;
  }
}
</style>