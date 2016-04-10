import React from 'react'
import classnames from 'classnames'
import './index.scss'

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    render () {
        let that = this;
        let items = this.props.tab.map(function (item, index) {
            let className = classnames({
                'nav-item': true,
                'active': parseInt(item.item_id, 10) === parseInt(that.props.itemId,10)
            });
            let pageType = (item.page_type != undefined) ? item.page_type : '';
            let page_id = (item.page_id != undefined) ? item.page_id : '';
            let prefix = '#/page/' + page_id + '?page_id=' + page_id;
            let suffix = '&page_type=' + pageType + '&item_id=' + item.item_id;
            let jumpUrl = prefix + suffix;
            return (
                <a key={index} className={className} href={jumpUrl}>
                    {item.title}
                </a>
            );
        });

        return (
            <div className="_namespace">
                <header>
                    <nav className="nav">
                        {items}
                    </nav>
                </header>
            </div>
        )
    }
}

Nav.defaultProps = {
    source: "",
    tab: [{
        "title": "热点",
        "page_id": 1000001001,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }, {
        "title": "明星",
        "page_id": 1000001002,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }, {
        "title": "电影",
        "page_id": 1000001003,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }, {
        "title": "电视剧",
        "page_id": 1000001004,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }, {
        "title": "综艺",
        "page_id": 1000001005,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }, {
        "title": "排行榜",
        "page_id": 1000001006,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }, {
        "title": "活动",
        "page_id": 1000001007,
        "rn": 30,
        "params": "{\"a\":1,\"b\":2}"
    }],
    title: ''
}
