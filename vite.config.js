import { defineConfig, loadEnv } from "vite"; 
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

const envResolver = {
    "build": () => {
        console.log('生产环境');
        return {...viteProdConfig,...viteBaseConfig}
    },
    "serve" : () => {
        console.log('开发环境');
        return {...viteDevConfig,...viteBaseConfig}
    }
}

export default defineConfig(({command="build"|"serve",mode}) => {
    // eslint-disable-next-line no-unused-vars
    const env = loadEnv(mode,process.cwd(),"")
    return envResolver[command]()
})