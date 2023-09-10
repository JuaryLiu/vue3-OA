import { defineStore } from 'pinia'
import { ref,reactive } from "vue";
import {getSubmitList} from '@api/home.js'
export const useSubmit= defineStore('submit',
    () => {
        let data = ref({})

        const getSubmit = (path) => {
            getSubmitList(path).then(res => {
                data.value = res.data.data.data
                console.log(data);
                
            })
        }
        return {
            getSubmit,
            data
        }
    },
)