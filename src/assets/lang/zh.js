import zhLocale from "element-plus/dist/locale/zh-cn.mjs";


const zh = {
       //全局配置
       add : '添加',
       welcome : '欢迎您',

       //局部
       status : {
           disabled : '不可用',  //不可用
           abled : '可用'         //可用
       },
   
       //elementUI
       ...zhLocale
}
export default zh;

