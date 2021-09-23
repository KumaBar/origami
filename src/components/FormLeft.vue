<template>
  <div class="form-left">
    <div class="form-left-title">Оформление заказа</div>
    <div class="form-left-phone">
      <div class="form-left-phone-title">Ваш номер телефона</div>
      <div class="form-left-phone-input">
        <input type="text" />
      </div>
    </div>
    <div class="form-left-delivery">
      <div class="form-left-delivery-title">Доставка</div>
      <div class="form-left-delivery-block">
        <input
          class="form-left-delivery-sreet"
          type="text"
          placeholder="Улица"
        />
        <input class="form-left-delivery-home" type="text" placeholder="Дом" />
        <input
          class="form-left-delivery-apartment"
          type="text"
          placeholder="Кв, офис"
        />
        <input
          class="form-left-delivery-entrance"
          type="text"
          placeholder="Подъезд"
        />
        <input
          class="form-left-delivery-floor"
          type="text"
          placeholder="Этаж"
        />
      </div>
      <div class="form-left-pay-price">Итого к оплате: {{ getTotalPrice }} ₽</div>
      <button class='form-left-submit'>Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FormLeft",
  computed: {
    ...mapGetters(["getTotalPrice"]),
  },
};
</script>

<style>
.form-left {
  padding-left: 20px;
}
.form-left-title {
  font-size: 40px;
  margin-bottom: 40px;
}
.form-left-phone-title,
.form-left-delivery-title,
.form-left-pay-title {
  font-size: 20px;
  margin-bottom: 60px;
  margin-top: 20px;
}
.form-left-phone,
.form-left-delivery,
.form-left-pay {
  padding-left: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.form-left input {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  transition: 0.2s;
}
.form-left input:hover {
  border-color: chartreuse;
}

.form-left-pay-price {
  color: grey;
  font-size: 20px;
  margin-top:20px;
  margin-bottom: 30px;
}

.form-left-submit{
    background:chartreuse;
    color:white;
    border-radius: 10px;
    font-size:20px;
    padding:20px;
     margin-bottom: 30px;
}
</style>