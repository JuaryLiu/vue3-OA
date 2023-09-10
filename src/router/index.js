import { createRouter, createWebHistory } from 'vue-router'
const routes= [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:'/home',
        component:() => import('@views/home/Home.vue'),
        meta:{isLogin: true}
        
    },
    {
        path:'/login',
        component:() => import('@views/login/PLogin.vue'),
        meta:{isLogin: false}
    },
    {
        path:'/application',
        component:() => import('@views/application/Application.vue'),
        meta:{isLogin: true}
    },
    
    {
        path:'/schedule',
        component:() => import('@views/schedule/Schedule.vue'),
        meta:{isLogin: true}
    },
    {
        path:'/user',
        component:() => import('@views/user/User.vue'),
        meta:{isLogin: true}
    },
    {
        path:'/clock',
        component:() => import('@views/clock/Clock.vue'),
        meta:{isLogin: false}
    },
    {
        path:'/apply',
        component:() => import('@views/apply/Apply.vue'),
        meta:{isLogin: false}
    },
    {
        path:'/attendance',
        component:() => import('@views/attendance/Attendance.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/statistics',
        name:"statistics",
        component:() => import('@views/attendance/statistics/Statistics.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/message',
        name:"message",
        component:() => import('@views/user/compontents/Message.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/meeting',
        name:"meeting",
        component:() => import('@views/user/compontents/Meeting.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/car',
        name:"car",
        component:() => import('@views/user/compontents/Car.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/notice',
        name:"notice",
        component:() => import('@views/user/compontents/Notice.vue'),
        meta:{isLogin: false},
    },
    {
        path:"/noticeInfo/:id",
        name:"noticeInfo",
        component:() => import('@views/home/components/NoticeInfo.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/wages',
        name:"wages",
        component:() => import('@views/user/compontents/Wages.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/setting',
        name:"setting",
        component:() => import('@views/user/compontents/Setting.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/about',
        name:"about",
        component:() => import('@views/user/compontents/About.vue'),
        meta:{isLogin: false},
    },
    {
        path:'/businessTrip',
        name:"businessTrip",
        component:() => import('@views/application/components/BusinessTrip.vue'),
        meta:{isLogin: false},
    },
    {
        path:`/application/:id`,
        name:"submit",
        component:() => import('@views/application/components/Submit.vue'),
        meta:{isLogin: false}
    },
    {
        path:`/search`,
        name:"search",
        component:() => import('@views/search/Search.vue'),
        meta:{isLogin: false}
    },
    {
        path:`/result/:id`,
        name:"result",
        component:() => import('@views/search/Result.vue'),
        meta:{isLogin: false}
    },
    {
        path:`/msgInfo/:id`,
        name:"msgInfo",
        component:() => import('@views/user/compontents/MsgInfo.vue'),
        meta:{isLogin: false}
    },
]

const router = createRouter({
    history: createWebHistory(), //import.meta.env.ENV_BASE_URL 当前的环境的请求地址
    routes,
})

export default router