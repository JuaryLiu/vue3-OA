import {useCounterStore} from './modules/counter.js'
import { useSubmit } from './modules/submit.js' 
const useStore = () => ({
    useCounterStore:useCounterStore(),
    useSubmit:useSubmit()
})

export default useStore