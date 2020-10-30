<template>
  <div class="login">
    <div class="img">
      <van-image
        round
        width="100"
        height="100"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="age">
      <div class="age-left">
        <router-link :to="{ name: 'Reg' }">短信验证码登录</router-link>
      </div>
      <div class="age-right">
        <router-link :to="{ name: 'Reg' }">免费注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { loginApi } from "../services/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      // console.log("submit", values);
      const result = await loginApi({
        userName: this.username,
        password: this.password,
      });
      console.log(result)
      if (result.code === "success") {
        console.log(result.code)
        localStorage.getItem("token",result.token);
        this.$router.push({
          name: "User",
        });
      } else {
        Notify({
          type: "danger",
          message: "result.message",
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.age {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>