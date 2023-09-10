import  service from  '@utils/request.js'

export const getLogin = (data) => {
    return service({
        url:'/login',
        method:'post',
        data
    })
}

export const getUserList = () => {
    return service({
        url:'/user',
        method:'get',
    })
}
