import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

import App from './App.vue';
import router from './router';
import{serverUrl}from"./utils/tools"

Vue.config.productionTip = false;

Vue.use(Vant);

Vue.filter('dalImg',(str)=>{
  if(str){
    if(str.startsWith('http')){
      return str
    }else{
      return serverUrl+str
    }
  }else{
    return'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/153314/9/3700/83044/5f97b1ebE1e0237ad/02a96d534cd33124.jpg!q70.jpg.dpg'
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
