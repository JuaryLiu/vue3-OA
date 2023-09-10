import { defineStore } from 'pinia'
import { ref } from "vue";
export const useCounterStore = defineStore('counter',
    () => {
        const count = ref(1)
        const addCount = () => {
            count.value++
        }
        return {
            count,
            addCount
        }
    },
    {
        persist: true // 数据持久化，开启默认存储在 localstorage里 以 {key：value} key就是定义的响应式数据，value就是对应的响应式数据
    }
)