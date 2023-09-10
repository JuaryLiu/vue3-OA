<template>
  <div class="login">
    <div class="header">
      <el-avatar
        class="avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <h2 class="title">签点</h2>
      <img
        src="	https://demo2022.axureshop.com/1697182/images/%E7%99%BB%E5%BD%95_1/u62257.svg"
        alt=""
        srcset=""
        class="img"
      />
    </div>
    <div class="form">
      <div class="inputDeep">
        <el-input v-model="formData.users" placeholder="手机号/用户名"> </el-input
      ></div>

      <div class="inputDeep">
        <el-input
          v-model="formData.pass"
          placeholder="请输入密码"
          type="password"
          show-password
        ></el-input>
      </div>
      <div class="link">
        <el-link type="primary">验证码登录</el-link>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-checkbox v-model="checked" class="checkbox">
        阅读同意《<el-link type="primary">隐私政策</el-link>》和《<el-link type="primary"
          >用户协议</el-link
        >》</el-checkbox
      >
      <el-button @click="submit" type="primary" size="large" class="btn">登录</el-button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
import { Hide, View } from '@element-plus/icons-vue'
import {getLogin} from '@api/users.js'
const IconShow = ref(true)
const formData = reactive({
  users: '',
  pass: ''
})
const checked = ref(true)
const router = useRouter()
function throttle(fn, delay = 300) {
  let timer = null
  return function (...args) {
    if (timer == null) {
      timer = setTimeout(() => {
        fn.call(this, ...args)

        clearTimeout(timer)
        timer = null
      }, delay)
    }
  }
}

const changeIcon = (el) => {
  IconShow.value = !IconShow.value
}
const submit = throttle(function () {
  if (!checked.value) {
    ElMessage('请阅读同意隐私政策和用户政策')
  } else {
    // router.push('/home')
    getLogin(formData).then(res => {
        if(res.data.code === 200) {
            ElMessage.success(res.data.msg)
            router.push('home')
        }
    })
  }
},1000)
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
}
.header {
  width: 100%;
  position: relative;
  display: flex;
  padding-top: 3.75rem;
  justify-content: center;
  height: 16.25rem;
  background: #488cee;
  margin-bottom: 5rem;
  .title {
    margin-left: 1.875rem;
    font-size: 28px;
    color: #ffffff;
    font-weight: 40.625rem;
  }
}
.img {
  width: 10.875rem;
  height: 10.875rem;
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -50%);
}
.el-input {
  margin-top: 1.25rem;
}

.inputDeep {
  border-bottom: 1px solid var(--el-border-color);
  padding-bottom: 0.3125rem;
  &:deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0px;
  }
}
.form {
  padding: 0 3.125rem;
  .link {
    margin: 1.25rem 0;
    display: flex;
    justify-content: space-between;
  }
  .checkbox {
    margin-bottom: 1.25rem;
  }
  .btn {
    width: 100%;
  }
}
</style>