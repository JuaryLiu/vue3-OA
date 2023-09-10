import enLocale from "element-plus/dist/locale/en.mjs";

const en = {
    //全局配置
    add : 'add',
    welcome : 'welcome',

    //局部
    status : {
        disabled : 'disabled',  //不可用
        abled : 'abled'         //可用
    },

    //elementPlus
    ...enLocale
}
export default en;

