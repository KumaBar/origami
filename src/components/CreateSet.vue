<template>
  <div class="create">
    <div
      :class="{
        createLeft: true,
        four: getNumber === 4 ? true : false,
        six: getNumber === 6 ? true : false,
        eight: getNumber === 8 ? true : false,
      }"
    >
      <div class="create-left-title">Набор <br />«Собери сам»</div>
      <div class="create-left-text">
        Создай набор из своих <br />
        любимых роллов!
      </div>
      <div class="create-left-price" v-if="getNumber === 4">899 ₽</div>
      <div class="create-left-price" v-if="getNumber === 6">1350 ₽</div>
      <div class="create-left-price" v-if="getNumber === 8">1750 ₽</div>
      <div class="create-left-btns">
        <div
          :class="{ createLeftBtn: true, active: getNumber === 4 }"
          @click="changeNumber(4)"
        >
          4 шт
        </div>
        <div
          :class="{ createLeftBtn: true, active: getNumber === 6 }"
          @click="changeNumber(6)"
        >
          6 шт
        </div>
        <div
          :class="{ createLeftBtn: true, active: getNumber === 8 }"
          @click="changeNumber(8)"
        >
          8 шт
        </div>
      </div>
    </div>
    <div
      :class="{
        createRight: true,
        four: getNumber === 4 ? true : false,
        six: getNumber === 6 ? true : false,
        eight: getNumber === 8 ? true : false,
      }"
    >
      <img
        class="create-right-img"
        v-if="getNumber === 4"
        src="http://imagiro.ru/media/uploads/custom_item_set/Povar_04.svg"
      />
      <img
        class="create-right-img"
        v-if="getNumber === 6"
        src="http://imagiro.ru/media/uploads/custom_item_set/Povar_06.svg"
      />
      <img
        class="create-right-img"
        v-if="getNumber === 8"
        src="http://imagiro.ru/media/uploads/custom_item_set/Povar_08.svg"
      />
      <div class="create-right-btn" @click="openPopup(); disableScroll();">Собрать</div>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll} from 'body-scroll-lock';
import { mapActions,mapGetters } from "vuex";
export default {
  name: "CreateSet",
  data() {
    return {
      size: 4,
    };
  },
  methods: {
    ...mapActions(["openPopup","changeNumber",]),
    disableScroll(){
      disableBodyScroll('#popup')
    }
  },
  computed:{
    ...mapGetters(['getNumber'])
  },
  components: {},
};
</script>

<style>
.four {
  background: rgb(138, 138, 167);
}
.six {
  background: rgb(90, 90, 129);
}
.eight {
  background: rgb(53, 53, 78);
}
.create {
  display: inline-flex;

  color: white;

  margin-bottom: 40px;
  padding: 5px 10px 5px;
  transition: 0.2s;
  flex-basis: 50%;
}
.createLeft,
.createRight {
  flex-basis: 50%;
  transition: 0.2s;
  border-radius: 25px;
  padding: 15px;
}
.createLeft {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.createRight {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.create-left-title {
  font-size: 30px;
  margin-bottom: 60px;
}
.create-left-text {
  font-size: 16px;
  margin-bottom: 70px;
}
.create-left-price {
  margin-bottom: 20px;
  font-size: 24px;
}
.create-left-btns {
  background: white;
  display: inline-flex;
  border-radius: 20px;
  color: gray;
  overflow: hidden;
}

.createLeftBtn {
  padding: 16px;
  cursor: pointer;
  transition: 0.2s;
}
.createLeftBtn.active {
  background: lime;
}
.createRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.create-right-img {
  display: block;
  margin: 0 auto;
  max-width: 250px;
  width: 100%;
  margin-bottom: 20px;
}
.create-right-btn {
  font-size: 20px;
  padding: 18px;
  background: lime;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;
  text-align: center;
}
.create-right-btn:hover {
  background: goldenrod;
}
@media (max-width: 1000px) {
  .create {
    margin: 0 auto;
  }
  .create-left-title {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .create-left-text {
    margin-bottom: 20px;
  }

  .createLeftBtn {
    padding: 10px;
    font-size: 12px;
  }
  .create-right-btn {
    padding: 10px;
    font-size: 18px;
  }
  .create-right-img {
    max-width: 150px;
    margin-bottom: 10px;
  }
}
@media (max-width: 650px) {
  .create-left-text {
    margin-bottom: 20px;
    font-size: 14px;
  }
  .create-left-price {
    font-size: 14px;
  }
}
</style>