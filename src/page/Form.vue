<template>
    <div class='form'>
        <FormLeft/>
        <FormRight/>
    </div>
</template>

<script>
import FormLeft from '../components/FormLeft'
import FormRight from '../components/FormRight'
export default{
    name:'Form',
    components:{
        FormLeft,
        FormRight
    }
}
</script>

<style>
.form{
    display:flex;
    justify-content: space-between;
}
.form-left{
    flex-basis:50%;
}
@media(max-width:1000px){
    .form-left-title{
        display:none;
    }
    .form-right-title{
        display:block;
    }
    .form{
        flex-direction: column-reverse;
    }
    .form-right{
        position:relative;
        padding-left:20px;
        margin-top:60px;
        top:0;
    }
}
@media (max-width: 650px) {
    .form-right-title{
        font-size:20px;
    }
  .form-right-item {
      width:100%;
    max-width: 400px;
  }
}
</style>