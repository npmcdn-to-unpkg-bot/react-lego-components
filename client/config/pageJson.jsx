const defaultGroupData = {
    "card_type": 11,
    "card_name": 'group'
}

const defaultNavData = {
    "card_type": -1,
    "card_name": 'nav'
}

const defaultFocusData =  {
    "card_type": 5,
    "card_name": 'focus',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_entertainment_click",
    "statTab": 4,
    "title": "正在追剧",
    "itemList": [
        {
            "resourceId": "99",
            "strList": [
                "【韩剧】太阳的后裔",
                "周六日更新4、5集",
                "图文直播"
            ],
            "scheme": "http://tieba.baidu.com/p/4375862649"
        },
        {
            "resourceId": "54",
            "strList": [
                "程序员的世界观察",
                "还没有拍摄呢",
                "图文直播"
            ],
            "scheme": "http://tieba.baidu.com/p/4243123798"
        },
        {
            "resourceId": "53",
            "strList": [
                "北京现代生活",
                "还没有拍摄呢",
                "图文直播"
            ],
            "scheme": "http://tieba.baidu.com/p/4243123798"
        }
    ]
};

const carouselData =  {
    "card_type": 1,
    "card_name": 'carousel'
};

const onepicInfo = {
    "card_type": 4,
    "card_name": "one-pic-info",
    "src": "http://tb1.bdstatic.com/tb/r/image/2016-03-02/ecb4202e7bd1e349da412deae50969a6.png",
    "desp": "暴走的肾上腺！今夏最爽片《碟5》要来了！竞请大家期待本...",
    "scheme": "http://tieba.baidu.com/p/4243123798",
    "icons":[
        {
            "url": "icon的链接",
            "urlNight": "夜间地址",
            "type":1,
            "content": 8888
        },
        {
            "url": "icon的链接",
            "urlNight": "夜间地址",
            "type":2,
            "content": 9999
        }
    ]
};

const singleCard = {
    "card_type": 2,
    "card_name": 'single-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "statTab": 4,
    "title": "北京线下吧友聚会报名,北京线下吧友聚会报名,北京线下吧友聚会报名",
    "showLeftLine": 1,
    "showLeftIcon": 1,
    "icon": {
        "url": "",
        "urlNight":"也就模式，暂且不需要,",
        "type": 3,// 3代表通知， :5,frs_ba_ticket;6,frs_game;7,frs_news;8,new_live,目 前贴吧娱乐只用3,对于新业务推荐下发url和urlNight,不推荐下发type
    },
    "moreButton": {
        "moreText": "更多",
        "moreColor": "#157FD2",
        "moreColorNight": "black",
        "moreScheme": "tieba://...",
        "moreSchemeWeb": "http://www.baidu.com"
    }
};
const blessCard = {
    "card_type": 9,
    "card_name": 'bless-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "statTab": 4,
    "blessItem": {
        "blessId": 2934294892,
        "pic": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
        "name": "周杰伦",
        "blessNum": 12132,
        "canBless": 1
    }
};
const rankDetailTrendData = {
    "card_type": 7,
    "card_name": 'rank-detail-trend',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "ranks": [
        {
            "rank":1,
            "title": "少年少年少少",
            "radio": 1,
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "iconUrl": "icon的链接",
            "picTrendType": "1",
            "picTrendUrl": ""
        },
        {
            "rank":2,
            "title": "少年少",
            "radio": 1,
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "iconUrl": "icon的链接",
            "picTrendType": "2",
            "picTrendUrl": ""
        },
        {
            "rank":3,
            "title": "少年",
            "radio": 1,
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "iconUrl": "icon的链接",
            "picTrendType": "1",
            "picTrendUrl": ""
        },
        {
            "rank":'04',
            "title": "少年少年少少",
            "radio": 1,
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "iconUrl": "icon的链接",
            "picTrendType": "2",
            "picTrendUrl": ""
        },
        {
            "rank":'05',
            "title": "少年少年少少",
            "radio": 1,
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "iconUrl": "icon的链接",
            "picTrendType": "1",
            "picTrendUrl": ""
        }
    ]
};
const horRankCard = {
    "card_type": 6,
    "card_name": "hor-rank-card",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "title": "电影好评帮",
    "displayNum": 5,
    "ratio":1,
    "scrollEnabled":true,
    "picType": 1,
    "ranks": [
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球大",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        }
    ]
};

const horRankCard2 = {
    "card_type": 6,
    "card_name": "hor-rank-card",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "title": "电影好评帮",
    "displayNum": 5,
    "ratio":1,
    "scrollEnabled":true,
    "picType": 2,
    "ranks": [
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球大",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        },
        {
            "resourceId":"",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "picScheme": "",
            "title": "星球",
            "subTitle": "9.1分",
            "bgColor": "",
            "bgColorNight": ""
        }
    ]
};

const rankDetailScoreData = {
    "card_type": 8,
    "card_name": "rank-detail-score",
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "ranks": [
        {
            "rank": 1,
            "title": "少年少年少",
            "desc": "主演：冯小刚& 吴一凡冯小刚& 吴一凡冯小刚& 吴一凡冯小刚& 吴一凡冯小刚& 吴一凡",
            "desc2": "2016.01.01上映",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "subTitle": "9.7分"
        },
        {
            "rank": 2,
            "title": "少年少年少,少年少年少",
            "desc": "得到的点滴电影评",
            "desc2": "2016.01.01上映",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "subTitle": "9.7分"
        },
        {
            "rank": 3,
            "title": "少年少年少",
            "desc": "得到的点滴电影评",
            "desc2": "2016.01.01上映",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "subTitle": "9.7分"
        },
        {
            "rank": 4,
            "title": "少年少年少,少年少年少",
            "desc": "得到的点滴电影评",
            "desc2": "2016.01.01上映",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "subTitle": "9.7分"
        },
        {
            "rank": 5,
            "title": "少年少年少",
            "desc": "得到的点滴电影评",
            "desc2": "2016.01.01上映",
            "picUrl": "http://tb1.bdstatic.com/tb/r/image/2016-03-04/01b505ccac1b166a5a323d907144228e.png",
            "subTitle": "9.7分"
        }
    ]
};

const PageJson = {
    cards:[
        defaultNavData,
        defaultGroupData,
        horRankCard,
        horRankCard2,
        carouselData,
        defaultFocusData,
        onepicInfo,
        singleCard,
        blessCard,
        rankDetailTrendData,
        rankDetailScoreData,
    ]
};
export default PageJson
