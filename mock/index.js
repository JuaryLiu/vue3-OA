const mockJs = require('mockjs')

const list = {
    info: '发起人信息',
    id: 0,
    list: [
        {
            id: 0,
            title: '流水号',
            tips: 'QJ20210102033',
            select: 'input',
            type: '',
        },
        {
            id: 1,
            title: '姓名',
            tips: 'JuaryLiu',
            select: 'input',
            type: '',
        },
        {
            id: 2,
            title: '部门',
            tips: '前端技术部',
            select: 'input',
            type: '',
        },
        {
            id: 3,
            title: '岗位',
            tips: '架构师',
            select: 'input',
            type: '',
        },
        {
            id: 4,
            title: '发起时间',
            tips: '2021-01-02 10:00',
            select: 'input',
            type: '',
        }
    ]
}


const userList = mockJs.mock({
    "data": [{
        token: 'Assces-Token',
        avatar: "*****",
    }]
})

const homeList = mockJs.mock({
    "data":
    {
        meetingList: [
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%80%89%E6%8B%A9%E4%BC%9A%E8%AE%AE%E5%AE%A4/u11357.jpg",
                title: "考勤制度需求变更确认会",
                time: "今日  10:00-11:00",
                addres: "301会议室",
                path: "meetingInfo"
            },
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%80%89%E6%8B%A9%E4%BC%9A%E8%AE%AE%E5%AE%A4/u11364.jpg",
                title: "考勤制度需求变更确认会",
                time: "明日  14:00-18:00",
                addres: "401会议室",
                path: "meetingInfo"
            },
        ],
        useCarList: [
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%80%89%E6%8B%A9%E8%BD%A6%E8%BE%86/u12736.png",
                title: "拜访客户",
                time: "今日  10:00",
                addres: "公司大楼1号出口 出发",
                licensePlate: "鄂A66666",
                path: "carInfo"
            },
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%80%89%E6%8B%A9%E8%BD%A6%E8%BE%86/u12746.png",
                title: "拜访客户",
                time: "明日  10:00",
                addres: "公司大楼1号出口 出发",
                licensePlate: "鄂A88888",
                path: "carInfo"
            }
        ],
        noticeList: [
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62338.svg",
                title: "吹响“逆战”集结号|2021年度集团民主生活前三次会议",
                tag: "公司新闻",
                tagType: "",
                time: "2023-1-10"
            },
            {
                id: mockJs.Random.id(),
                Image: "",
                title: "关于2021年考勤制度变更通知",
                tag: "规章制度",
                tagType: "success",
                time: "2023-1-10"
            },
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62338.svg",
                title: "吹响“逆战”集结号|2021年度集团民主生活前三次会议",
                tag: "公司新闻",
                tagType: "",
                time: "2023-1-10"
            },
            {
                id: mockJs.Random.id(),
                Image: "https://demo2022.axureshop.com/1697182/images/%E9%A6%96%E9%A1%B5_1/u62338.svg",
                title: "吹响“逆战”集结号|2021年度集团民主生活前三次会议",
                tag: "公司新闻",
                tagType: "",
                time: "2023-1-10"
            },
        ],
        timeList: [
            {
                id: mockJs.Random.id(),
                title: "上班打卡",
                time: "09:01",
                tag: "迟到",
                type: "warning",
                typeCode: 0
            },
            {
                id: mockJs.Random.id(),
                title: "下班打卡",
                time: "15:01",
                tag: "早退",
                type: "danger",
                typeCode: 1
            },
        ]
    }
})

const scheduleList = mockJs.mock({
    "data": [
        [
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                effect: "退回",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: "warning"
            },
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                effect: "转签",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                effect: "",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ],
        [
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ],
        [
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '黄一发起的年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ]
    ]
})
const applicationList = mockJs.mock({
    "data": [
        {
            title: "考勤管理",
            id: mockJs.Random.id(),
            type: false,
            list: [
                {
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62810.png",
                    text: "请假申请",
                    id: mockJs.Random.id(),
                    path: "leave"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62814.png",
                    text: "补卡申请",
                    path: "add"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62818.png",
                    text: "外勤申请",
                    path: "field"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62822.png",
                    text: "加班申请",
                    path: "overtime"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62826.png",
                    text: "出差申请",
                    path: "businessTrip"
                },
            ]
        },
        {
            title: "人力资源管理",
            id: mockJs.Random.id(),
            type: true,
            list: [
                {
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62810.png",
                    text: "入职申请",
                    id: mockJs.Random.id(),
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62840.png",
                    text: "转正申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62844.png",
                    text: "调薪申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62848.png",
                    text: "转岗申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62852.png",
                    text: "离职申请"
                },
            ]
        },
        {
            title: "工作汇报",
            id: mockJs.Random.id(),
            type: false,
            list: [
                {
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62934.png",
                    text: "日报",
                    id: mockJs.Random.id(),
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62865.png",
                    text: "周报"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62869.png",
                    text: "月报"
                }
            ]
        },
        {
            title: "行政管理",
            id: mockJs.Random.id(),
            type: true,
            list: [
                {
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62879.png",
                    text: "会议室申请",
                    id: mockJs.Random.id(),
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62883.png",
                    text: "物品领用"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62887.png",
                    text: "机票预订"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62891.png",
                    text: "酒店预订"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62895.png",
                    text: "采购申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62899.png",
                    text: "资产报销"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62933.png",
                    text: "用车申请"
                },
            ]
        },

        {
            title: "财务管理",
            id: mockJs.Random.id(),
            type: false,
            list: [
                {
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62909.png",
                    text: "出差报销",
                    id: mockJs.Random.id(),
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62909.png",
                    text: "现金支借"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62917.png",
                    text: "付款申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62921.png",
                    text: "开票申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62925.png",
                    text: "用印申请"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E5%BA%94%E7%94%A8/u62929.png",
                    text: "市内交通报销"
                },
            ]
        }
    ]
})

const userInfoList = mockJs.mock({
    "data": [
        {
            list: [
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63678.svg",
                    title: "我的消息",
                    tag: "2",
                    path: "message"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63685.svg",
                    title: "我的考勤",
                    tag: "",
                    path: "attendance"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63691.svg",
                    title: "我的申请",
                    tag: "",
                    path: "apply"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63722.svg",
                    title: "我的工资条",
                    tag: "",
                    path: "wages"
                },
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63697.svg",
                    title: "我的会议",
                    tag: "",
                    path: "meeting"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63716.svg",
                    title: "我的用车",
                    tag: "",
                    path: "car"
                }
            ]
        },
        {
            list: [
                {
                    id: mockJs.Random.id(),
                    url: "	https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63704.svg",
                    title: "设置",
                    tag: "",
                    path: "setting"
                },
                {
                    id: mockJs.Random.id(),
                    url: "https://demo2022.axureshop.com/1697182/images/%E6%88%91%E7%9A%84/u63710.svg",
                    title: "关于",
                    tag: "",
                    path: "about"
                }
            ]
        }
    ]
})

const myScheduleList = mockJs.mock({
    "data": [
        [
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                effect: "退回",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: "warning"
            },
            {
                id: mockJs.Random.id(),
                title: '出差报销',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                effect: "转签",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '出差申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                effect: "",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ],
        [
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ],
        [
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ],
        [
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            },
            {
                id: mockJs.Random.id(),
                title: '年假申请',
                time: "2021-03-01 10:00",
                tag: "直接领导审核",
                info: "原型杂货铺－研发中心－产品设计部－产品经理",
                type: ""
            }
        ],
    ]
})

const noticeList = mockJs.mock({
    "data": [
        [
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "",
            },

        ],
        [
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "",
            },

        ],
        [
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "",
            },

        ],
        [
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },
            {
                id: mockJs.Random.id(),
                title: '吹响“逆战”集结号|2021年度集团民主生活前三次会议召开通知',
                time: "2021-03-01 10:00",
                img: "https://demo2022.axureshop.com/1697182/images/%E5%85%AC%E5%91%8A%E9%80%9A%E7%9F%A5_1/u62460.svg",
            },

        ],
    ]
})

const leaveList = mockJs.mock({
    data: {
        title: "请假申请",
        flag: false,
        btn:true,
       list:[
        {...list},
        {
            info:"请假信息",
            id:2,
            list: [
                {
                    id: mockJs.Random.id(),
                    title: "请假类型",
                    select: "select",
                    type: "",
                    tips: ""
                },
                {
                    id: mockJs.Random.id(),
                    title: "开始时间",
                    select: "select",
                    type: "",
                    tips: ""
                },
                {
                    id: mockJs.Random.id(),
                    title: "结束时间",
                    select: "select",
                    type: "",
                    tips: ""
                },
                {
                    id: mockJs.Random.id(),
                    title: "请假时长（小时）",
                    select: "input",
                    type: "number",
                    tips: ""
                },
                {
                    id: mockJs.Random.id(),
                    title: "请假事由",
                    select: "input",
                    type: "textarea",
                    tips: "请填写"
                },
                {
                    id: mockJs.Random.id(),
                    title: "图片",
                    select: "updata",
                    type: "",
                    tips: ""
                }
            ]
        }
       ]
    }
})
const overtimeList = mockJs.mock({
    data: {
        title: "加班申请",
        flag: false,
        btn:true,
        list:[
            {...list},
            {
                info: "加班信息",
                id:2,
                list: [
                    {
                        id: mockJs.Random.id(),
                        title: '开始时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '结束时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
        
                    {
                        id: mockJs.Random.id(),
                        title: '时长（小时）',
                        select: 'input',
                        type: 'number',
                        tips: '请输入时长'
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '加班原因',
                        select: 'input',
                        type: 'textarea',
                        tips: '请填写'
                    }
                ]
            }
        ]
    }
})
const fieldList = mockJs.mock({
    data: {
        title: "外勤申请",
        flag: false,
        btn:true,
        list:[
            {...list},
            {
                id:2,
                info: "外勤信息",
                list: [
                    {
                        id: mockJs.Random.id(),
                        title: '结束时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '结束时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
        
                    {
                        id: mockJs.Random.id(),
                        title: '请假时长（小时）',
                        select: 'input',
                        type: 'number',
                        tips: '请输入时长'
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '外出地点',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '外出详情',
                        select: 'input',
                        type: 'textarea',
                        tips: '请填写'
                    }
                ]
            }
        ]
    }
})
const addList = mockJs.mock({
    data: {
        title: "补卡申请",
        flag: false,
        btn:true,
       list:[
        {...list},
        {
            info:"补卡信息",
            id:2,
            list: [
                {
                    id: mockJs.Random.id(),
                    title: '补卡时间',
                    select: 'select',
                    type: '',
                    tips: ''
                },
                {
                    id: mockJs.Random.id(),
                    title: '补卡理由',
                    select: 'input',
                    type: 'textarea',
                    tips: '请填写'
                },
                {
                    id: mockJs.Random.id(),
                    title: "图片",
                    select: "updata",
                    type: "",
                    tips: ""
                }
            ]
        }
       ]
    }
})
const businessTripList = mockJs.mock({
    data: {
        title: "出差信息",
        flag: false,
        btn:true,
       list:[
        {...list},
        {
            info:"出差申请",
            id:2,
            list: [
                {
                    id: mockJs.Random.id(),
                    title: '开始时间',
                    select: 'select',
                    type: '',
                    tips: ''
                },
                {
                    id: mockJs.Random.id(),
                    title: '结束时间',
                    select: 'select',
                    type: '',
                    tips: ''
                },
    
                {
                    id: mockJs.Random.id(),
                    title: '出差时长',
                    select: 'input',
                    type: 'number',
                    tips: '请输入时长'
                },
                {
                    id: mockJs.Random.id(),
                    title: '出差地点',
                    select: 'input',
                    type: '',
                    tips: '请输入地点'
                },
                {
                    id: mockJs.Random.id(),
                    title: '去程交通',
                    select: 'select',
                    type: '',
                    tips: ''
                },
                {
                    id: mockJs.Random.id(),
                    title: '返程交通',
                    select: 'select',
                    type: '',
                    tips: ''
                },
                {
                    id: mockJs.Random.id(),
                    title: '出差事宜',
                    select: 'input',
                    type: 'textarea',
                    tips: '请填写'
                }
            ]
        }
       ]
    }
})

const addMeetingList = mockJs.mock({
    data: {
        title: "发起会议",
        flag: false,
        btn:true,
        list: [
            { ...list },
            {
                info: "会议信息",
                id: 2,
                list: [
                    {
                        id: mockJs.Random.id(),
                        title: '会议标题',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '议题内容',
                        select: 'input',
                        type: 'textarea',
                        tips: '请填写'
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '会议场所',
                        select: 'radio',
                        type: '',
                        tips: '',
                        list: [{
                            id: 1,
                            title: "内部"
                        }, {
                            id: 2,
                            title: "外部"
                        }]
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '会议室名称',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '开始时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '结束时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '会议时长（小时）',
                        select: 'input',
                        type: 'number',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '标准人数',
                        select: 'input',
                        type: 'number',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '最大容纳人数',
                        select: 'input',
                        type: 'number',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '议题内容',
                        select: 'input',
                        type: 'textarea',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '与会人员',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '参会人数',
                        select: 'input',
                        type: 'number',
                        tips: ''
                    },

                ]
            }
        ]
    }
})


const addCarList = mockJs.mock({
    data: {
        title: "用车申请",
        flag: false,
        btn:true,
        list: [
            { ...list },
            {
                info: "申请信息",
                id: 2,
                list: [
                    {
                        id: mockJs.Random.id(),
                        title: '用车人',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车人所属部门',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车性质',
                        select: 'radio',
                        type: '',
                        tips: '',
                        list: [{
                            id: 1,
                            title: "公用"
                        }, {
                            id: 2,
                            title: "其他"
                        }]
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车方式',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '选择车辆',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车路线',
                        select: 'input',
                        type: 'textarea',
                        tips: '请填写'
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '同行人员',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车开始时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车结束时间',
                        select: 'select',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车时长（小时）',
                        select: 'input',
                        type: 'number',
                        tips: '请输入时长'
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '出发地',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '途径地',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '目的地',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '预计里程(km)',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '预计耗油(L)',
                        select: 'input',
                        type: '',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '用车事由',
                        select: 'input',
                        type: 'textarea',
                        tips: ''
                    },
                    {
                        id: mockJs.Random.id(),
                        title: '备注',
                        select: 'input',
                        type: 'textarea',
                        tips: ''
                    }
                ]
            }
        ]
    }
})
const myInfoList = mockJs.mock({
    data: {
        title: "个人资料",
        flag: true,
        btn:false,
        list: [
            {
                info: '基本信息',
                id: 0,
                list: [
                    {
                        id: 0,
                        title: '姓名',
                        select: 'input',
                        type: '',
                        tips: 'JuaryLiu'
                    },
                    {
                        id: 1,
                        title: '工号',
                        select: 'input',
                        type: '',
                        tips: '23'
                    },
                    {
                        id: 2,
                        title: '个人形象',
                        info: "无",
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 3,
                        title: '入职时间',
                        info: '2020-02-01',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 4,
                        title: '转正时间',
                        info: '2021-05-01',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 5,
                        title: '企业邮箱',
                        info: 'haungdaxian@qq.com',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 6,
                        title: '导师',
                        info: 'JuaryLiu',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 7,
                        title: '工龄',
                        info: '3',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 8,
                        title: '荣誉记录',
                        info: '2020年优秀员工',
                        select: 'input',
                        type: '',
                    }
                ]
            },
            {
                info: '职位信息',
                id: 1,
                list: [
                    {
                        id: 0,
                        title: '管理级别',
                        info: '无',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 1,
                        title: '管理部门',
                        info: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 2,
                        title: '所属部门',
                        info: "原型杂货铺-研发中心-产品设计部",
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 3,
                        title: '岗位',
                        info: '架构师',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 4,
                        title: '直接上级',
                        info: 'james',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 5,
                        title: '间接上级',
                        info: '雷军',
                        select: 'input',
                        type: '',
                    },
                ]
            },
            {
                info: '个人信息',
                id: 2,
                list: [
                    {
                        id: 0,
                        title: '性别',
                        info: '男',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 1,
                        title: '联系电话',
                        info: '17798280375',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 2,
                        title: '现居住地',
                        info: "湖北省武汉市洪山区",
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 3,
                        title: '户籍地址',
                        info: '湖北省孝感市孝南区',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 4,
                        title: '家庭地址',
                        info: '湖北省孝感市孝南区',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 5,
                        title: '身高（m）',
                        info: '1.85',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 6,
                        title: '体重（kg）',
                        info: '68',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 7,
                        title: '身份证号码',
                        info: '4209000000000000000000',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 8,
                        title: '籍贯',
                        info: '湖北',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 9,
                        title: '民族',
                        info: '汉',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 10,
                        title: '政治面貌',
                        info: '党员',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 11,
                        title: '婚姻状况',
                        info: '未婚',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 12,
                        title: '生日',
                        info: '2000-10-26',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 13,
                        title: '紧急联系人',
                        info: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 14,
                        title: '紧急联系人电话',
                        info: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 15,
                        title: '开户行',
                        info: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 16,
                        title: '银行名称',
                        info: '',
                        select: 'input',
                        type: '',
                    },
                ]
            }
        ]
    }
})
const carInfoList = mockJs.mock({
    data: {
        title: "用车申请",
        flag: false,
        btn:false,
        list: [
            { ...list },
            {
                info: '申请信息',
                id: 2,
                list: [
                    {
                        id: 0,
                        title: '用车人',
                        tips: 'juaryLiu',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 1,
                        title: '用车人所属部门',
                        tips: '产品设计部',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 2,
                        title: '用车性质',
                        tips: "公用",
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 3,
                        title: '用车方式',
                        tips: '往返',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 4,
                        title: '选择车辆',
                        tips: '鄂A88888',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 5,
                        title: '用车路线',
                        tips: '公司-其他公司',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 6,
                        title: '同行人员',
                        tips: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 7,
                        title: '用车结束时间',
                        tips: '2021-04-10 10:00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 8,
                        title: '用车结束时间',
                        tips: '2021-04-10 18:00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 9,
                        title: '用车时长（小时）',
                        tips: '8',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 10,
                        title: '出发地',
                        tips: '公司',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 11,
                        title: '途径地',
                        tips: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 12,
                        title: '目的地',
                        tips: '其他公司',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 13,
                        title: '预计里程(km)',
                        tips: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 14,
                        title: '预计耗油(L)',
                        tips: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 15,
                        title: '用车事由',
                        tips: '去其他公司参会',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 16,
                        title: '备注',
                        tips: '',
                        select: 'input',
                        type: '',
                    },
                ]
            }

        ]
    }
})
const wagesInfoList = mockJs.mock({
    data: {
        title: "工资条",
        flag: false,
        btn:false,
        list: [
            {
                info:'',
                id: 2,
                list: [
                    {
                        id: 0,
                        title: '期次',
                        tips: '202303',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 1,
                        title: '基本工资',
                        tips: '1,9000.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 2,
                        title: '绩效奖金',
                        tips: "11,300.00",
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 3,
                        title: '补发',
                        tips: '300.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 4,
                        title: '补发原因',
                        tips: '2月工资结算错误',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 5,
                        title: '津贴',
                        tips: '300.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 6,
                        title: '津贴说明',
                        tips: '餐补、电脑补贴、加班费',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 7,
                        title: '公积金个人',
                        tips: '1,200.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 8,
                        title: '公积金企业',
                        tips: '1,200.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 9,
                        title: '养老金个人',
                        tips: '320.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 10,
                        title: '养老金企业',
                        tips: '640.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 11,
                        title: '医保个人',
                        tips: '80.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 12,
                        title: '医保企业',
                        tips: '280.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 13,
                        title: '失业个人',
                        tips: '20.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 14,
                        title: '失业企业',
                        tips: '12.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 15,
                        title: '工伤企业',
                        tips: '12.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 16,
                        title: '生育企业',
                        tips: '12.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 17,
                        title: '扣款',
                        tips: '0.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 18,
                        title: '扣款说明',
                        tips: '',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 19,
                        title: '应发合计',
                        tips: '29100.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 20,
                        title: '应扣合计',
                        tips: '2,000.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 21,
                        title: '个人所得税',
                        tips: '5420.00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 22,
                        title: '实发合计',
                        tips: '21680.00',
                        select: 'input',
                        type: '',
                    },
                ]
            }
        ]
    }
})
const meetingInfoList = mockJs.mock({
    data: {
        flag: false,
        btn:false,
        title: "会议详情",
        list: [
            {...list},
            {
                info: '会议信息',
                id: 2,
                list: [
                    {
                        id: 0,
                        title: '会议标题',
                        tips: '考勤制度需求变更确认会',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 1,
                        title: '议题内容',
                        tips: '确认公司2021年薪考勤制度变更内容点',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 2,
                        title: '会议场所',
                        tips: "内部",
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 3,
                        title: '会议室名称',
                        tips: '302室会议室',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 4,
                        title: '开始时间',
                        tips: '2021-03-01 10:00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 5,
                        title: '结束时间',
                        tips: '2021-03-01 11:00',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 6,
                        title: '会议时长（小时）',
                        tips: '1',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 7,
                        title: '标准人数',
                        tips: '12',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 8,
                        title: '最大容纳人数',
                        tips: '20',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 9,
                        title: '会议室设备',
                        tips: '投影仪、白板、笔、话筒',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 10,
                        title: '与会人员',
                        tips: '人事1、人事2、人事3、人事4',
                        select: 'input',
                        type: '',
                    },
                    {
                        id: 11,
                        title: '参会人数',
                        tips: '4',
                        select: 'input',
                        type: '',
                    },
                ]
            }
        ]
    }
})

const timeList = {
    upTime: "",
    downTime: "",
}
module.exports = [
    {
        method: 'post',
        url: '/api/login',
        response: ({ data }) => {
            return {
                code: 200,
                msg: 'success',
                data: userList
            }
        }
    },
    {
        method: 'get',
        url: '/api/homeList',
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: homeList
            }
        }
    },
    {
        method: 'get',
        url: '/api/schedule',
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: scheduleList
            }
        }
    },
    {
        method: 'get',
        url: '/api/application',
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: applicationList
            }
        }
    },
    {
        method: 'get',
        url: '/api/user',
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: userInfoList
            }
        }
    },
    {
        method: 'get',
        url: '/api/mySchedule',
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: myScheduleList,
            }
        }
    },
    {
        method: 'get',
        url: '/api/notice',
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: noticeList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/leave`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: leaveList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/add`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: addList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/field`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: fieldList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/overtime`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: overtimeList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/businessTrip`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: businessTripList,
            }
        }
    },

    {
        method: 'get',
        url: `/api/submit/addMeeting`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: addMeetingList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/addCar`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: addCarList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/carInfo`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: carInfoList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/userInfo`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: myInfoList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/meetingInfo`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: meetingInfoList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/submit/wagesInfo`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: wagesInfoList,
            }
        }
    },

    {
        method: 'put',
        url: `/api/updataTime`,
        response: ({ body }) => {

            console.log(body);
            return {
                code: 200,
                msg: 'success',
                data: timeList,
            }
        }
    },
    {
        method: 'get',
        url: `/api/time`,
        response: () => {
            return {
                code: 200,
                msg: 'success',
                data: timeList,
            }
        }
    },
]

