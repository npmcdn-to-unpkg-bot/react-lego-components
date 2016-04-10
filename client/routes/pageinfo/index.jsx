import React from 'react'
import {Link} from 'react-router'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import request from 'superagent'
import _ from 'lodash'
import classnames from 'classnames'
// import { Layout, Sidebar, Section } from 'fit-layout-global'

// 组件Map列表
import ComponentsMap from '../../config/componentsMap.jsx'

// 测试JSON数据
import PageJson from '../../config/pageJson.jsx'

const setTitle = (title) => {
    document.title = title;
}
export default class Pageinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.query && nextProps.location.query.item_id != this.props.location.query.item_id) {
            delete this.state.cards;
            this.setState({
                loadingObj: classnames({
                    loading: true,
                    test: true
                })
            });
            let paramsId = nextProps.params.id;
            this.asyncGetPageData(nextProps.location.query.item_id, paramsId)
        }
    }

    asyncGetPageData (itemId, paramsId) {
        let that = this;
        itemId = itemId || this.props.location.query.item_id;
        itemId = parseInt(itemId, 10);
        paramsId = parseInt(paramsId || this.props.params.id, 10);
        let prefix = '/mo/q/blitz/page?page_id=';
        let entertainmentPrefix = '/mo/q/blitz/entertainment?sign=123456tbclient654321&page_type=1&page_id=';
        let url = prefix + itemId;
        if ( paramsId >= 1000001001 && paramsId <= 1000001007) {
            // 娱乐中心
            url = entertainmentPrefix + itemId;
        }

        request
            .get(url)
            .end(function (err, res) {
                if (err || !res.ok) {
                    console.error('error');
                } else {
                    // 返回是json cards 和page_info
                    // 2016-03-29
                    let data = res.body.data;
                    // data.page_info = JSON.parse(data.page_info);
                    if (!data.page_info) {
                        data.page_info = {};
                    }
                    let desc = data.page_info.desc || data.page_info.title || '贴吧blitz';
                    setTitle(desc);
                    data.page_info.itemId = itemId;
                    data.page_info.paramsId = paramsId;
                    that.setState(_.assignIn({}, data));
                    that.willUpdate = true;
                    that.setState({
                        loadingObj: classnames({
                            loading: false,
                            test: true
                        })
                    });
                }
            });
    }

    componentDidMount() {
        this.asyncGetPageData();
    }

    getOneComponent(com, i) {
        try {
            if(typeof com == 'string') {
                com = JSON.parse(com);
            }
            var props = _.assignIn({}, com);
            let tmpComponent = ComponentsMap[com.card_type];
            if (tmpComponent) {
                return React.createElement('div', {key:i}, React.createElement(tmpComponent, props));
            }
        }
        catch(err) {
            throw new Error("parse json error");
        }
    }

    render() {
        var that = this;
        let pageInfo = this.state.page_info;
        let tab = pageInfo && pageInfo.tab;
        return (
            <div key={this.props.location.query.item_id}>
                {
                    tab && React.createElement('div', {key:0}, React.createElement(ComponentsMap['nav'], pageInfo))
                }
                <div className={this.state.loadingObj}></div>
                {
                    this.state.cards && this.state.cards.map(function (com, i) {
                        return that.getOneComponent(com, i);
                    })
                }
            </div>

        );
    }
}
