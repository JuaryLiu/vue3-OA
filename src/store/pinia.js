import { createPinia } from 'pinia'
/**
 * 对于 setup的数据持久化， 组合式api可以用pinia-plugin-persisted 插件 ，
 * 也可以自己写持久化，很简单就是把数据存储到浏览器中， 
 * 读取数据 localStorage.getItem(key)  
 * 设置数据 localStorage.setItem(key,value)  
 * 清除数据 localStorage.remove(key)
 * 具体配置看官方文档：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html
 */
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' 

const pinia = createPinia() // 创建pinia的实例

pinia.use(piniaPluginPersistedstate)

export default pinia
