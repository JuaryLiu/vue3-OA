import axios from "axios";


const service = axios.create({
    baseURL: import.meta.env.ENV_BASE_URL,
    timeout:5000
})

service.interceptors.request.use(config => {
    //请求拦截操作
    return config
},error => {
    // 请求失败处理
    return new Promise.reject(error)
})

service.interceptors.response.use(response => {
    // 对响应数据进行处理
    return response
},error => {
    // 响应失败处理
    return new Promise.reject(error)
})

export default service