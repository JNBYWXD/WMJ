<template>
  <div class="goods">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in products"
        :key="item._id"
        :num="item.quantity"
        :price="item.price"
        desc="描述信息"
        :title="item.name"
        :thumb="item.coverImg | dalImg"
        :thumb-link="' /#/detail?id=' + item._id"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" @click="buyHandle(item)"
            >加入购物车</van-button
          >
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </van-list>
  </div>
</template>

<script>
import { loadProducts } from "../services/products";
import { addToCart } from "../services/carts";

export default {
  name: "List",
  data() {
    return {
      products: [],
      pages:1,//总页码
      page:1,//当前页码
      loading: false,
      finished: false,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      this.loading=true;
      const result = await loadProducts({page:this.page});
      console.log(result);
      this.products = [...this.products,...result.products];
      this.page++;
      this.pages=result.pages;
      this.loading=false;
    },
    async buyHandle(item) {
      const res = await addToCart(item, 1);
      console.log(res);
    },
    onLoad(){
      console.log("加载更多")
      if(this.pages<this.page){
        this.finished=true;
      }else{
       this.loadData()
      }
    }
  },
};
</script>

<style>
</style>