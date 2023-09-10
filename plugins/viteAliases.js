const path = require('path')
const fs = require('fs')
function diffDirAndFile(diffDirAndFile,basePath) {
    let result = {
        dirs:[],
        files:[]
    }
    diffDirAndFile.forEach(item => {
        const currentFileStat = fs.statSync(path.resolve(basePath,item))
        const isDirectory = currentFileStat.isDirectory()
        isDirectory?result.dirs.push(item):result.files.push(item)
    })
    return result
}


function getAllSrcDir(keyName) {
    const basePath = path.resolve(__dirname,'../src')
    const result = fs.readdirSync(basePath)
     const  diffResult =diffDirAndFile(result,basePath)
     let resloveAliasesObj = {
        [keyName]:basePath
     }
     diffResult.dirs.forEach(item => {
        const key = keyName+item
        const absPath = path.resolve(basePath,item)
        resloveAliasesObj[key] = absPath
     })
     return resloveAliasesObj
}

module.exports = ({keyName = "@"} ={}) => {
    return {
        config: () => { //vite特有的钩子
            const alias = getAllSrcDir(keyName)
            // console.log(alias);
            return {
                resolve:{
                    alias,
                  }
            }
        }
    }
}