<template>
  <div class="header">
    <el-icon color="#2d8cf0" size="25" @click="goBack"><ArrowLeftBold /></el-icon>
    <div class="input">
      <slot></slot>
    </div>
    <div @click="search">搜索</div>
  </div>
</template>

<script setup>
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
    input:{
        type:String,
        define:""
    }
})
const router = useRouter()
const goBack = () => {
  router.go(-1)
}

const search = () => {
  if (props.input !== '') {
    router.push({
        name:"result",
        params: {
            id:props.input
        }
    })
    
   let data =  JSON.parse(localStorage.getItem("historyList"))
   if(data) {
    localStorage.setItem("historyList",JSON.stringify([...data,props.input]))
   } else {
     localStorage.setItem("historyList",JSON.stringify([props.input]))
   }
    
  }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 2.75rem;
  display: flex;
  padding: 0.625rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #2d8cf0;
  background: #fff;
  .input {
    flex: 0.9;
  }
}
</style>