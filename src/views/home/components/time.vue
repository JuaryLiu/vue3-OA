<template>
  <div class="inputDeep">
    <el-card>
      <!-- 日期的选择 -->
      <template #header> 
        <div class="card-header">
          <div class="card-header-title">
            <el-date-picker
              v-model="time"
              type="date"
              :default-value="new Date()"
              :clearable="false"
              :editable="false"
            />
            <span class="tips">考勤情况</span>
          </div>
        </div>
      </template>
      <!-- 打卡信息的显示 -->
      <div class="card-content">
        <div class="card-content-left" v-for="item in data" :key="item.id">
          <div class="top">
            <span class="title">{{ item.title }}</span>
            <el-tag color="#fff" size="small" class="mx-1" :type="item.type">{{ item.tag }}</el-tag>
          </div>
          <div class="footer">
            <span :class="item.typeCode === 1 ? 'danger' : 'waring'">{{ item.time }}</span>
          </div>
        </div>
        <div class="card-content-right">
          <span>温馨提示:</span>
          <span>打卡异常，请尽快处理异常情况哦！</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { parseTime } from '@utils/time.js' // 一个时间转换的函数
const time = ref('2023-9-9') // 这里可以用 parseTime来获取当前的日期, 传入后端某个子端来获取对应的数据，这里图方便，数据是死的

//父组件异步传过来属性
const props = defineProps({
  list: Array 
})

const data = ref([])
onMounted(() => {
  let date = new Date()
  time.value = parseTime(date, '{y}-{m}-{d}')
})

watch(
  () => props.list, // 监听父组件异步传过来属性，不然子组件会接收不到值
  (newVal) => {
    data.value = newVal
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.inputDeep {
  &:deep(.el-card__header) {
    padding: 0.625rem !important;
  }
}
.warning {
  color: #e6a23c;
}
.danger {
  color: #f56c6c;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card-header-title {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1.125rem;
    color: rgba(45, 140, 240, 0.9);
    &:deep(.el-input__wrapper) {
      box-shadow: 0 0 0 0px;
      font-size: 1.125rem !important;
    }
    &:deep(.el-input__prefix) {
      color: rgba(45, 140, 240, 0.9) !important;
    }
    &:deep(.el-input__inner) {
      color: rgba(45, 140, 240, 0.9) !important;
    }
   
    .tips {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.card-content {
  display: flex;
  .card-content-left {
    flex: calc(100 / 3);
    .top {
      display: flex;
      margin-bottom: 15px;
      font-size: 13px;
      color: #666;
      span {
        margin-right: 0.3125rem;
      }
    }
    .footer {
      font-size: 1.75rem;
      color: #67c23a;
    }
  }
  .card-content-right {
    flex: calc(100 / 3);
    span {
      font-size: 0.8125rem;
      color: #ccc;
      &:first-child {
        display: block;
      }
    }
  }
}
</style>