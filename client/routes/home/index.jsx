import React from 'react'
import {Link} from 'react-router'
// import { Layout, Sidebar, Section } from 'fit-layout-global'

// 组件Map列表
import ComponentsMap from '../../config/componentsMap.jsx'

// 测试JSON数据
import PageJson from '../../config/pageJson.jsx'

export default class Home extends React.Component {

    getOneComponent(com, i) {
        // params => root, props, componet child
        try {
            com = JSON.parse(com);
            var props = Object.assign({}, com);
            return React.createElement('div', {key:i}, React.createElement(ComponentsMap[com.card_name], props));
        }
        catch(err) {
            throw new Error("parse json error");
        }
    }
    render() {
        var that = this;
        return (
            <div>
                <Link to="/ceshi">adsfsaf</Link>
                {
                    PageJson.cards.map(function (com, i) {
                        return that.getOneComponent(com, i);
                    })
                }
            </div>
        );

    }
}
