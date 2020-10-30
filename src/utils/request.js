import axios from 'axios';
import { Notify } from "vant";
import {serverUrl}from"./tools"

const instance=axios.create({
    timeout:5000,
    baseURL:serverUrl,//为网络请求配置一个基础地址，真实的请求地址是：baseURL+url
})

// 全局拦截
// Add a request interceptor
// 全局请求拦截,网络请求之前触发
instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      config.headers.authorization = "Bearer " + localStorage.getItem("token");
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
//全局拦截
// Add a response interceptor
// 全局相应拦截，网络请求完成之后触发
instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      // console.log("请求数据成功");
      // console.log(response);
      return response.data;//这里写了data，所以List.vue页面里result.data.products;改为result.products;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // console.dir(error);
      if (error && error.message.indexOf("timeout") > -1) {
        console.log("网络超时了");
        Notify({ type: "warning", message: "网络不稳定，请刷新重试" });
      }
      if (error.response && error.response.status === 401) {
        Notify({ type: "warning", message: "用户信息异常，请重新登录" });
        setTimeout(() => {
          window.location.href = "/#/login";
        }, 3000);
      }
      return Promise.reject(error);
    }
  );
  


// export function get(url,params){
//     //参数一表示请求地址
//     //参数二表示配置顶
//     return instance.get(url,
//         params//params:params
//     )
// }
export const get = (url, params) => instance.get(url, { params });
export function post(url,data){
    //参数一表示请求地址
    //参数二表示配置顶
    return instance.post(url,
        data,//params:params
        // {data}
    )
}