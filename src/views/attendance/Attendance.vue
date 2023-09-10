<template>
  <div>
    <Header title="考勤查询" left="true"></Header>
    <div class="flex">
      <div>
        <calendar
          :events="calendar1.events"
          :lunar="calendar1.lunar"
          :value="calendar1.value"
          :begin="calendar1.begin"
          :end="calendar1.end"
          :weeks="calendar1.weeks"
          :months="calendar1.months"
          @select="calendar1.select"
        ></calendar>
      </div>
      <div class="info">
        <p>打卡规则：固定上下班 08:30-12:00 13:30-18:00</p>
        <div class="time" v-for="item in 2" :key="item">
          <div class="title">
            <img src="https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84%E8%80%83%E5%8B%A4/u63977.svg" alt="" srcset="">
            <span>上班打卡</span>
          </div>
          <span class="clock">08:43</span>
        </div>
        <el-button type="primary" plain class="btn" @click="goLeave">处理异常</el-button>
      </div>
    </div>
  <div class="el-card">
        <el-card>
            <template #header>
                <div class="card-header" @click="account">
                      <span>本月考勤统计</span>
                      <el-icon size="16" color="#999"><ArrowRightBold /></el-icon>   
                  </div>
            </template>
            <div class="card-main" >
                <div class="main-item" v-for="item in dataList" :key="item.id">
                    <span class="title">{{item.title}}</span>
                    <span>{{item.time}}</span>
                </div>
            </div>
        </el-card>
  </div>
  </div>
</template>

<script setup>
import calendar from './calendar.vue'
import Header from '@/components/Header.vue'
import { reactive } from 'vue'
import {
  ArrowRightBold,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const dataList =reactive([
    {
        id:0,
        title:"加班（时）",
        time:"0"
    },
    {
        id:1,
        title:"迟到（次）",
        time:"1"
    },
    {
        id:2,
        title:"旷工（天）",
        time:"0"
    }
])
const router = useRouter()
const goLeave = () => {
  router.push({
    name:"submit",
    params:{
      id:"leave"
    }
  })
}
const account = () => {
    router.push({
        name:"statistics",
    })
}

const calendar1 = reactive({
  value: [], //默认日期
  // lunar:true, //显示农历
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  months: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  // events:{
  //     '2018-2-14':'$408','2018-2-15':'$460','2018-2-16':'$500',
  // },
  select(value) {
    console.log(value.toString())
  }
})
</script>

<style lang="scss" scoped>
.el-card {
    margin-top: .625rem;
    &:deep(.el-card__header) {
    padding: .625rem !important;
  }
}
.card-main {
    display: flex;
    justify-content: space-around;
    .main-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        font-size: 1.75rem;
        color: #333;
        .title {
            font-size: .875rem;
            color: #666;
        }
    }
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.125rem;
    color: #333;
}
.info {
    padding:  1.25rem;
  color: #999;
  font-size: 0.875rem;
  position: relative;
  background: #fff;
  &::after {
    position: absolute;
    content: "";
    width: .3125rem;
    height:3.25rem;
    background: #ccc;
    border-radius: .3125rem;
    top: 50%;
    left: 1.25rem;
    transform: translate(52%,-48%);
  }
  .time {
    margin-top: .625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title {
        visibility: middle;
        font-size: 1rem;
        color: #333;
        span {
            margin-left: .625rem;
        }
    }
    .clock {
        font-size: 1.125rem;
        color: #ff0000;
        font-weight: 700;
        margin-left: 1.4375rem;
    }
  }
  .btn {
    position: absolute;
    right: 1.25rem;
    top: 30%;
  }
}
/*demo*/
.flex {
  box-sizing: border-box;

  display: -webkit-box;
  -webkit-box-pack: start;
  -webkit-box-align: start;

  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -webkit-align-items: top;

  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-flow: row wrap;
}
.flex > div {
  width: 100%;

  border-radius: 2px;
  position: relative;
}
.flex > div > span {
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 2px 10px;
  font-size: 10px;
  border-radius: 0 0 2px 0;
  background: #ea6151;
  color: #fff;
}
.flex > div > input {
  box-sizing: border-box;
  width: 100%;
  margin-top: 20px;
  border-radius: 2px;
  border: 1px solid #dedede;
  padding: 10px;
  font-size: 16px;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwpAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGlmb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUuZW90PyNpZWZpeCIpIGZvcm1hdCgiZW1iZWRkZWQtb3BlbnR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUudHRmIikgZm9ybWF0KCJ0cnVldHlwZSIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnN2ZyNpZm9udCIpIGZvcm1hdCgic3ZnIik7IH0KCl1dPjwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJ0cmFuc2Zvcm0tZ3JvdXAiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTU2MjUsIDAuMDE1NjI1KSI+PHBhdGggZD0iTTcxMS4zMDYyIDI5MC42OTcyYzI0LjI4MjEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTU0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMjYgMC00My45ODggMTkuNzI4NC00My45ODggNDQuMDUzNXYyMDAuMTA0OTZDNjY3LjMxODMgMjcwLjk5MDMgNjg3LjAwMzYgMjkwLjY5NzIgNzExLjMwNjIgMjkwLjY5NzJ6TTYyMy40ODA4IDExMy40MjAzSDQwMC43NjQ5Mjh2NjYuNTEzOTJoMjIyLjcxNTkwNDAwMDAwMDAyVjExMy40MjAyODh6TTg4NC4wNTMgMTEzLjQyMDNoLTgyLjc3NDAxNnY2Ni4xNDUyOGg4NS45NDAyMjRjMjUuMjc4NSAwIDQ2LjYxMTUgMjEuMzc2IDQ2LjYxMTUgNDYuNjc3djE1My45Mjc2OEg5MC40Mzg2NTYwMDAwMDAwMXYtMTUzLjkyNzY4YzAtMjUuMyAyMS4zMzMtNDYuNjc3IDQ2LjYxMTUtNDYuNjc3aDg2LjUwMzQyNFYxMTMuNDIwMjg4aC04Mi42NDI5NDRjLTY0LjA4NiAwLTExNi41MDc2IDUyLjUwODctMTE2LjUwNzYgMTE2LjcwMzJ2Njc2LjgwMTUzNTk5OTk5OTljMCA2NC4xNzQxIDUwLjQ5MTQgMTE2LjY4MDcgMTE0LjU3NzQgMTE2LjY4MDdIODg0LjA1Mjk5MmM2NC4wNjI1IDAgMTE2LjUwNjYtNTIuNTA2NiAxMTYuNTA2Ni0xMTYuNjgwN1YyMzAuMTIzNTE5OTk5OTk5OThDMTAwMC41NTk2IDE2NS45MjkgOTQ4LjExNDQgMTEzLjQyMDMgODg0LjA1MyAxMTMuNDIwM3pNOTMzLjgyOTYgOTEwLjM1MTRjMCAyNS4zLTIxLjMzMyA0Ni42NzYtNDYuNjExNSA0Ni42NzZIMTM3LjA1MDExMTk5OTk5OTk4Yy0yNS4yNzg1IDAtNDYuNjExNS0yMS4zNzYtNDYuNjExNS00Ni42NzZWNDQ2LjQ0NTU2OEg5MzMuODI5NjMyVjkxMC4zNTEzNnpNMjY3LjEwODQgNjQ2LjE4MTljMzYuODc3MyAwIDY2Ljc1MjUtMjkuOTM5NyA2Ni43NTI1LTY2Ljg4MTUgMC0zNi45MjI0LTI5Ljg3NTItNjYuODYxMS02Ni43NTI1LTY2Ljg2MTEtMzYuODU0OCAwLTY2Ljc1MjUgMjkuOTM5Ny02Ni43NTI1IDY2Ljg2MTFDMjAwLjM1NTggNjE2LjI0MjIgMjMwLjI1MjUgNjQ2LjE4MTkgMjY3LjEwODQgNjQ2LjE4MTl6TTUxMS41NDg0IDY0Ni4xODE5YzM2Ljg1NTggMCA2Ni43NTI1LTI5LjkzOTcgNjYuNzUyNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTU3LTY2Ljg2MTEtNjYuNzUyNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzQ0NC43OTU5IDYxNi4yNDIyIDQ3NC42NzExIDY0Ni4xODE5IDUxMS41NDg0IDY0Ni4xODE5ek0yNjUuOTE2NCA4OTAuNzA5YzM2Ljg3NzMgMCA2Ni43NTE1LTI5LjkzOTcgNjYuNzUxNS02Ni44NjExIDAtMzYuOTQyOC0yOS44NzQyLTY2Ljg4MjYtNjYuNzUxNS02Ni44ODI2LTM2Ljg1NTggMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44ODI2QzE5OS4xNjM5IDg2MC43NjkzIDIyOS4wNTk2IDg5MC43MDkgMjY1LjkxNjQgODkwLjcwOXpNNTExLjU0ODQgODkwLjcwOWMzNi44NTU4IDAgNjYuNzUyNS0yOS45Mzk3IDY2Ljc1MjUtNjYuODYxMSAwLTM2Ljk0MjgtMjkuODk1Ny02Ni44ODI2LTY2Ljc1MjUtNjYuODgyNi0zNi44NzczIDAtNjYuNzUyNSAyOS45Mzk3LTY2Ljc1MjUgNjYuODgyNkM0NDQuNzk1OSA4NjAuNzY5MyA0NzQuNjcxMSA4OTAuNzA5IDUxMS41NDg0IDg5MC43MDl6TTc1NS42NDEzIDY0Ni4xODE5YzM2Ljg1NjggMCA2Ni43NTM1LTI5LjkzOTcgNjYuNzUzNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTY3LTY2Ljg2MTEtNjYuNzUzNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzY4OC44ODk5IDYxNi4yNDIyIDcxOC43NjQgNjQ2LjE4MTkgNzU1LjY0MTMgNjQ2LjE4MTl6TTMxMS43MDM2IDI5MC42OTcyYzI0LjI4MTEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTQ0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMTYgMC00My45ODkgMTkuNzI4NC00My45ODkgNDQuMDUzNXYyMDAuMTA0OTZDMjY3LjcxNDYgMjcwLjk5MDMgMjg3LjQwMiAyOTAuNjk3MiAzMTEuNzAzNiAyOTAuNjk3MnoiIGZpbGw9IiM1ZTdhODgiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==)
    no-repeat 8px 10px;
  padding-left: 36px;
  color: #666;
}

/*transition*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-10px);
}

/*下拉框*/
.calendar-dropdown {
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
}
.calendar-dropdown:before {
  position: absolute;
  left: 30px;
  top: -10px;
  content: '';
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #dedede;
}
.calendar-dropdown:after {
  position: absolute;
  left: 30px;
  top: -9px;
  content: '';
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.calendar-dialog-mask {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
}

.calendar-dialog-body {
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
}
</style>