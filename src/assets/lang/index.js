import { createApp } from 'vue'
console.log(createApp);
import VueI18n from 'vue-i18n'
import en from './en.js'
import zh from './zh.js'
Vue.use(VueI18n)
const messages = {
    en:en,
    zh:zh
}

export function getLanguage(){
    const chooseLanguage = window.localStorage.getItem("language");
    if(chooseLanguage)
        return chooseLanguage
    
    //如果没有选择语言，默认为zh
    const language = (navigator.language || navigator.browserLanguage).toLowerCase();
    const locales = Object.keys(messages);
    for(const locale of locales){
        if(language.indexOf(locale) > -1){
            console.log("locale===",locale)
            return locale;
        }
    }
    return 'zh'
}
const i18n = new VueI18n({
    locale: getLanguage(),
    messages
})

export default i18n

