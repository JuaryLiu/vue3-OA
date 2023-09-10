<template>
  <Header title="应用">
    <el-icon color="#2d8cf0" size="25"><Search /></el-icon>
  </Header>
  <div class="mian">
    <el-card class="el-card" v-for="item in data" :key="item.id">
      <template #header>
        <div class="header">
          <img
            src="https://demo2022.axureshop.com/1697182/images/%E4%BA%A7%E5%93%81%E7%AE%80%E4%BB%8B/u7.png"
            alt=""
          />
          <span>{{ item.title }}</span>
        </div>
      </template>
      <el-row>
        <el-col class="el-col" :span="6" v-for="i in item.list" :key="i.id">
          <div class="item" @click="goPath(i)">
            <div :class="item.type ? 'item-top' : 'item-top warning'">
              <img :src="i.url" alt="" />
            </div>
            <span>{{ i.text }}</span>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { getApplicationList } from '@api/home.js'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
let data = ref([])
onMounted(() => {
  getApplicationList().then((res) => {
    data.value = res.data.data.data
  })
})
const router = useRouter()
const goPath = (item) => {
  router.push({
    name:`submit`,
    params:{
      id:item.path
    }
  })
}
</script>

<style lang="scss" scoped>
.warning {
  background: #e6a23c !important;
}
.el-card {
  margin-top: 0.625rem;
}
.el-col {
  margin-bottom: 1.25rem;
}
.mian {
  margin-top: 2.75rem;
  padding-bottom: 5rem;
  &:deep(.el-card__header) {
    padding: 0.625rem !important;
  }
}
.header {
  display: flex;
  align-items: center;
  span {
    margin-left: 0.625rem;
    font-size: 15px;
    color: #999;
  }
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: #666;
  .item-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #2d8cf0;
    border-radius: 50%;
  }
}
</style>