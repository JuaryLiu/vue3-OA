<template>
<!-- 对信息页面的封装-->
  <Header :title="list.title" left="true">
    <el-icon color="#2d8cf0" size="25" v-if="list.flag" @click.stop="modifyInfo" 
      ><Edit
    /></el-icon>
  </Header>

  <div class="main">
    <el-card class="card"  v-for="item in list.list" :key="item.id">
      <template #header>
        <div class="header">
          <img
            src="https://demo2022.axureshop.com/1697182/images/%E4%BA%A7%E5%93%81%E7%AE%80%E4%BB%8B/u7.png"
            alt=""
          />
          <span>{{ item.info }}</span>
        </div>
      </template>
      <div class="main-info">
        <div class="item" v-for="i in item.list" :key="i.id">
          <span class="title">{{ i.title }}</span>
          <span class="info deep">
            <el-input
            class="input"
            :type="i.type"
            v-model="value"
            v-if="i.select === 'input'"
            :autosize="{ minRows: 3, maxRows: 6 }"
            :placeholder="i.tips"
          />
  
          <el-select v-model="value" clearable placeholder="请选择" v-if="i.select === 'select'">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <UpData v-if="i.select === 'updata'" />
          </span>
        </div>
      </div>
    </el-card>
  </div>
  <div class="submite" v-if="list.btn">
    <el-button class="btn" type="primary" size="large">提交</el-button>
    <el-button class="btn" size="large">保存草稿</el-button>
  </div>
</template>

<script setup>
import {Edit} from '@element-plus/icons-vue'
import UpData from '@components/UpData.vue'
import { onMounted, ref, watch } from 'vue'
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
const value = ref('')
const radio = ref(1)
const props = defineProps({
  data: {
    type: Object,
    define: {
      title: '', //头部标题
      info: '', // 每个选项的标题
      flag:Boolean, // 控制头部右部分的icon是否显示
      btn:Boolean, // 控制提交按钮是否显示
      list: [  // 具体数据
        {
          list:[]
        }
      ]
    }
  }
})
const list = ref()
const modifyInfo =() => {
  console.log(111);
}
watch(
  () => props.data,
  (newVal) => {
    list.value = newVal
    
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.card {
  margin-top: 0.625rem;
}
.main {
  margin: 0 0.625rem;
  margin-top: 54px;
  padding-bottom: 5rem;
  &:deep(.el-card__header) {
    padding: 0.625rem !important;
  }
  &:deep(.el-card__body) {
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
.submite {
  width: 100%;
  padding: 0.625rem 1.25rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  height: 4.0625rem;
  .btn {
    flex: 1;
    font-size: 1rem;
  }
}

.input {
    text-align: center;
}
.deep {
  &:deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0px !important;
  }
   &:deep(.el-input__wrapper) {
    box-shadow: 0 0 0 0px !important;
  }
  &:deep(.el-textarea__inner) {
    box-shadow: 0 0 0 0px !important;
  }
}
.main-info {
    .item {
      padding: 0.625rem 0;
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: rgba(102, 102, 102, 0.898039215686275);
      border-bottom: 1px solid rgba(244, 244, 244, 1);
      &:last-child {
        border: none;
      }
      .title {
        flex: 40%;
        color: rgba(51, 51, 51, 0.898039215686275);
      }
      .info {
        flex: 60%;
      }
    }
  }
</style>