import  service from  '@utils/request.js'

export const getHomeList = () => {
    return service({
        url:'/homeList',
        method:'get',
    })
}

export const getScheduleList = () => {
    return service({
        url:'/schedule',
        method:'get',
    })
}

export const getMyScheduleList = () => {
    return service({
        url:'/mySchedule',
        method:'get',
    })
}

export const getApplicationList = () => {
    return service({
        url:'/application',
        method:'get',
    })
}

export const getNoticeList = () => {
    return service({
        url:'/notice',
        method:'get',
    })
}

export const getSubmitList = (path) => {
    return service({
        url:`/submit/${path}`,
        method:'get',
    })
}


export const getTimeList = () => {
    return service({
        url:`/time`,
        method:'get',
    })
}


export const putTime = (data) => {
    return service({
        url:`/updataTime`,
        method:'post',
        data
    })
}


export const getInfoList = (path) => {
    return service({
        url:`/info/${path}`,
        method:'get',
    })
}


export const getUserInfo = () => {
    return service({
        url:`/userInfo`,
        method:'get',
    })
}