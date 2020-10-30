<template>
  <div class="about">
    <h1>购物车</h1>
  </div>
</template>
<script>
import{loadCarts}from'../services/carts';
export default {
  name:'Cart',
  async created(){
    const res=await loadCarts();
    console.log(res);
  }
}
</script>
