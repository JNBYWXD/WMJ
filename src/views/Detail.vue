<template>
  <div class="detail">
      <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
import { loadProductDetail} from "../services/products";
export default {
    name:'Detail',
    data(){
        return{
            product:{}
        }
    },
    created(){
        console.log("组件创建成功了");
        this.loadData();
    },
    watch:{
        $route(){
            this.loadData();
        }
    },
    methods:{
     async   loadData(){
         if(this.$route.query.id){
          const result=await  loadProductDetail(this.$route.query.id);
          console.log(result)
          this.product=result;
         }
     }
    }
}
</script>

<style scoped>

</style>