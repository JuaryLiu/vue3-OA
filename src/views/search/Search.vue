<template>
  <div class="home">
    <Header :input="input">
      <el-input v-model="input" placeholder="搜索代办、应用、会议" clearable />
    </Header>
    <div class="main" v-if="list">
      <div class="card-header">
        <span>历史搜索</span>
        <el-icon size="18" @click="remove"><DeleteFilled /></el-icon>
      </div>

      <div class="col">
        <el-button class="btn" @click="goPath(item)" round v-for="item in list" :key="item">{{
          item
        }}</el-button>
      </div>
    </div>
    <el-empty v-else :image-size="200" />
  </div>
</template>

<script setup>
import { ArrowLeftBold, DeleteFilled } from '@element-plus/icons-vue'
import Header from '@views/search/Header.vue'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const router = useRouter()
const input = ref('')
const list = ref('')
const remove = () => {
  localStorage.removeItem('historyList')
  list.value = ''
}
const goPath = (value) => {
  router.push({
    name: 'result',
    params: {
      id: value
    }
  })
}
watch(
  () => localStorage.getItem('historyList'),
  (newVal) => {
    if (newVal) {
      list.value = JSON.parse(newVal)
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-wrap: wrap;
  .btn {
    margin-top: 0.625rem;
  }
}
.main {
  padding: 1.25rem;
}
.card-header {
  margin-top: 2.75rem;
  display: flex;
  justify-content: space-between;
}
</style>