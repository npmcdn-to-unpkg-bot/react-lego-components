/**
 *
 * @author shibiaoz
 * @date 2016-03-03
 * 送祝福card, 数据结构
{
    "card_type": 9,
    "card_name": 'bless-card',
    "item_id": "",
    "flip_id": "",
    "scheme": "",
    "statistics": "lego_single_card_click",
    "statTab": 4,
    "blessItem": {
        "blessId": 2934294892,
        "pic": "",
        "name": "周杰伦",
        "blessNum": 12132,
        "canBless": 1
    }
}
*/
import React from 'react';
import Blessbtn from './images/bless-btn.png';
import './index.scss';
export default class Blesscard extends React.Component {
    constructor(props) {
        super(props);
    }
    getBlessnum() {
        let num = 0;
        let blessItem = this.props && this.props.blessItem;
        num = blessItem.blessNum;
        if (num > 9999) {
            num = num/10000;
        }
        return (num + 'W');
    }
    onTouchStart() {
        let blessItem = this.props && this.props.blessItem;
        let blessId = blessItem.blessId;
        // alert(blessId + '送祝福业务逻辑，直接fetch相应的接口。。。');
    }
    getBlessbtn() {
        let blessItem = this.props && this.props.blessItem;
        let isShowBlessbtn = blessItem.canBless;
        if (isShowBlessbtn) {
            return (
                <div onTouchStart={this.onTouchStart.bind(this)} className="bless-btn"><img alt="送祝福" src={Blessbtn} /></div>
            );
        }
    }
    render() {
        let pic = 'http://tb1.bdstatic.com/tb/r/image/2016-03-03/62446b481c81edd09e0188ce85359014.png';
        return (
            <div className="_namespace">
                <div className="line"></div>
                <div className="content-wraper">
                    <div className="title">今日寿星</div>
                    <div className="column-wraper">
                        <div className="protrait"><img src={pic}/></div>
                        <div className="bless-info">
                            <span className="bless-name">{this.props.blessItem.name}</span>
                            <span className="bless-req">收到</span>
                            <span className="bless-num">{this.getBlessnum()}</span>
                            <span>人的祝福</span>
                        </div>
                        {this.getBlessbtn()}
                    </div>
                </div>
            </div>
        );
    }
}












