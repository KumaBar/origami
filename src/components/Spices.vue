<template>
  <div class="spices">
    <div v-for="item in getSpicesItems" class="spices-item" :key="item.id">
      <img :src="item.img" />
      <div class='spices-title'>{{item.title}}</div>
      <div class="spices-counter">
        <img class="spices-minus" src="../assets/minus.svg" @click="decrementSpicesCount(item)" />
        <div class="spices-count">{{item.count}}</div>
        <img class="spices-plus" src="../assets/plus.svg" @click="incrementSpicesCount(item)"/>
      </div>
      <div class='spices-price'>{{item.price}}₽</div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex' 
export default {
  name:'Spices',
computed:{
  ...mapGetters(['getSpicesItems'])
},
methods:{
  ...mapActions(['incrementSpicesCount','decrementSpicesCount'])
}
}
</script>
<style>
.spices{
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    max-width:900px;
    margin:0 auto;
}
.spices-item{
    display:flex;
    flex-direction: column;
    flex-basis:30%;
    align-items: center;
    padding:20px;
width:250px;
}
.spices-item img {
  width: 100%;
  max-width: 100px;
}
.spices-item:nth-child(2) img{
    max-width:47px;
}
.spices-item:nth-child(3) img{
    max-width:76px;
}
.spices-item:nth-child(4) img{
    max-width:68px;
}
.spices-item:nth-child(5) img{
    max-width:64px;
}
.spices-item:nth-child(6) img{
    max-width:75px;
}
.spices-title{
    margin-top:10px;
    font-size:16px;
    text-align: center;
}
.spices-counter{
    display:flex;
    justify-content: space-between;
    width:100px;
    margin-top:10px;
    margin-bottom:10px;
}
.spices-counter img{
    width:30px;
    cursor:pointer;
}
.spices-count{
   display:flex;
   align-self:center;
   font-size:24px;
}

.spices-price{
    text-align:center;
    color:gray;
}
@media(max-width:600px){
    .spices-item{
        flex-basis:50%;
    }
}
</style>