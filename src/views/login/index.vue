<template>
  <div
    class="pager"
    :class="{'gg-login': env.VITE_BRAND=== 'GG'}"
  >
    <div
      class="title"
    >{{brandConfig.title}} </div>
    <div class="desc">{{brandConfig.welcome}}</div>
    <van-form
      @submit="onSubmit"
      class="form"
    >
      <van-cell-group inset>
        <van-field
          clearable
          v-model="username"
          name="username"
          label=""
          placeholder="请输入手机号"
          :left-icon="require('login/yonghu.png')"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          clearable
          :left-icon="require('login/mima.png')"
          label=""
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        />
      </van-cell-group>
      <div>
        <van-button
          color="#67A6FF"
          round
          block
          class="btn"
          native-type="submit"
					:loading="loading"
					loading-text="登录中..."
          :disabled=" !username || !password"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import { setToken } from '@/utils/auth'
import { login } from "@/api/login";
import { useRouter } from "vue-router";
import { require } from '@/utils/index.js'
import useConfigHandle from "@/hooks/useConfigHandle";
const { brandConfig, env } = useConfigHandle()
const username = ref('');
const password = ref('');
const router = useRouter();
const getSrc = () => {
  return require(`${brandConfig.value.loginLogo}`);
}
const getbgSrc = () => {
  return require(`${brandConfig.value.bgImage}`);
}
const loading=ref(false);
const onSubmit = async (values) => {
	loading.value=true
	let res = await login(values).catch(() => {
		loading.value=false
	})
	loading.value=false
  if (res?.status == 200) {
    setToken(res.body.token)
    router.push({
      path: '/confirmInfo',
      query: {
        from: 'login'
      }
    })
  }
};
onMounted(() => {

})
</script>
<style lang="scss" scoped>
@import url("../../font/font.css");
.pager {
  height: 100vh;
  background: linear-gradient(222deg, #eff6ff 0%, #f5f7f8 44%, #ffffff 100%);
  .bg-img {
    height: 90px;
    width: 205px;
    position: absolute;
    left: 17;
    top: 17px;
  }

  .title {
    margin-top: 15px;
    font-size: 36px;
    text-align: center;
    font-family: YouSheBiaoTiHei;
    // color: #2f3e6b;
		background: linear-gradient( to right ,  #576AA3 ,  #2E3D69 );
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

  }
  .desc {
    text-align: center;
    color: #8997b4;
    font-size: 17px;
    margin-top: 10px;
  }

  .form {
    margin-top: 10px;
    margin-top: 15px;
  }
}
.btn {
  height: 40px;
  background: #67a6ff;
  border-radius: 23px;
  margin: 40px auto;
  line-height: 40px;
}
.login-img {
  width: 60px;
  height: 60px;
  margin: 47px auto 0px;
  display: block;
}
.gg-login {
  .login-img {
    width: 161px;
    height: auto;
    margin-left: 23px;
  }
  .bg-img {
    right: 17px;
    left: unset;
  }
  .title {
    font-size: 30px;
    margin-top: 79px;
		// color: #67A6FF;
		background: linear-gradient( to right ,  #67A6FF ,  #4683DA );
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
  }
  .desc {
    font-size: 16px;
  }
}
.van-cell-group {
  background: transparent !important;
}
:deep(.van-cell) {
  margin-top: 20px;
  border-bottom: 1px solid #ebf0f4;
  background: transparent !important;
}

::v-deep(.van-icon) {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  img {
    width: 20px;
    height: 20px;
  }
}
::v-deep(.van-field__value),
::v-deep(.van-field__control) {
  color: #253859 !important;
  font-size: 16px;
  ::placeholder {
    color: #a5a5a5 !important;
    font-size: 16px;
  }
}
::v-deep(.van-button--disabled) {
  background: #c3cbd9 !important;
  border: none;
}
</style>
