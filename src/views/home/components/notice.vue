<template>
  <div>
    <!-- 封装的通知栏 -->
    <div class="card">
      <el-card>
        <template #header>
          <div class="card-header" @click="goPath">
            <div class="card-header-title current">
                <slot></slot>
              <span>{{title}}</span>
            </div>
            <div>
              <el-icon size="16" color="#999"><ArrowRightBold /></el-icon>
            </div>
          </div>
        </template>
        <div class="current">
          <ul>
            <li v-for="item in list" :key="item.id" @click="goInfo(item)">
              <img class="img" :src="item.Image" alt="" v-if="item.Image" />
              <div class="current-title bell-title" v-if="path==='notice'" @click.stop="goNotice">
                <p>{{ item.title }}</p>
                <div class="tag">
                  <el-tag effect="dark" :type="item.tagType">{{ item.tag }}</el-tag>
                  <span>{{ item.time }}</span>
                </div>
              </div>

              <div class="current-title" v-else>
                <p>{{ item.title }}</p>
                <span>{{ item.time }}</span>
                <span>{{ item.addres }}</span>
              </div>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowRightBold,
} from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  data: Array,    // 内容信息
  path: String,  //跳转路径
  title:String  // 改通知标题
})
const list = ref([])
const router = useRouter()
const goPath = () => {
  router.push(props.path)
}
// 根据父组件传递的数据，来进行不同内容的渲染
const goInfo =(item) => {
  router.push({
    name:"submit",
    params:{
      id:item.path
    }
  })
}

const goNotice =(item) => {
  console.log(item);
  router.push({
    name:"noticeInfo",
    params:{
      id:"1"
    }
  })
}
watch(
  () => props.data,
  (newValue) => {
    list.value = newValue
  }
)
</script>

<style lang="scss" scoped>
.el-card {
  &:deep(.el-card__header) {
    padding: 0.625rem !important;
  }
}
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-header-title {
      display: flex;
      align-items: center;
      font-size: 1.125rem;
      color: rgba(45, 140, 240, 0.9);
    }
  }
 
  .card {
    margin: 0.625rem 0;
    .current {
      ul {
        li {
          display: flex;
          align-items: center;
          height: 4.5rem;
          border-bottom: 1px solid rgba(242, 242, 242, 1);
          &:last-child {
            border-bottom: none;
          }
          .img {
            width: 4.375rem;
            height: 3.1875rem;
          }
          .current-title {
            margin-left: 0.625rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 0.8125rem;
            color: #999;
            p {
              font-size: 0.875rem;
              color: #333;
            }
          }
          .bell-title {
            .tag {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
    }
  }
</style>