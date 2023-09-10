const postcssPresetEnv = require('postcss-preset-env')
const path = require('path')
module.exports = {
    //  postscc配置对象
    plugins:[
        postcssPresetEnv({
            importFrom:path.resolve(__dirname,'./globalVariable.css'),
        })
    ]
}