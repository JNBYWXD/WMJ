<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for="index in images" :key="index"><img :src="index"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {
      images: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/133369/8/13778/99808/5f97f3d1E5386ad38/44d99602879f5697.jpg!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/153314/9/3700/83044/5f97b1ebE1e0237ad/02a96d534cd33124.jpg!q70.jpg.dpg',
      ],
    };
  },
  components: {},
};
</script>
<style>
  .my-swipe {
width: 100%;
height: 30%;
  }
  .my-swipe img{
    width: 100%;
    height: 100%;
  }
</style>
