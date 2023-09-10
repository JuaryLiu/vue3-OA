<template>
 <div class="header clear_fix">
    <div class="vue-header">
      <div class="left"><el-icon color="#2d8cf0" size="25" v-show="left" @click="goBack"><ArrowLeftBold/></el-icon></div>
      <span class="vue-title">{{ title }}</span>
        <div class="right" @click="goSearch"><slot /></div>
    </div>
 </div>
</template>

<script setup>
import { ArrowLeftBold} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  left: String,
  icon: String,
  title: String | Function
})
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
const goSearch =() => {
  router.push('search')
}
</script>

<style lang="scss" scoped>

.vue-header {
  padding: 0 .625rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 2.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  z-index: 555;
  color: #333;
  border-bottom: 1px solid rgba(244, 244, 244, 1);
  .vue-title {
    flex: 0.6;
    text-align: center;
  }
  .left {
    flex: 0.2;
    display: flex;
    align-items: center;
  }
  .right {
    flex: 0.2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
 }

</style>