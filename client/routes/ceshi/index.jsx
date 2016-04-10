import React from 'react'
import ReactDOM from 'react-dom'
import Rankdetailtrend from '../../components/rank-detail-trend/index.jsx'
import {Link} from 'react-router'
class ChildApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c:1
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('...调用shouldComponentUpdate', nextProps, nextState);
        return true;
    }
    componentWillUpdate() {
        console.log('...调用componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('...调用componentDidUpdate');
    }
    componentWillMount() {
        console.log('childrenApp',this.props.children)
        console.log('...调用componentWillMount');
    }
    componentDidMount() {
        console.log('...调用componentDidMount');
        // console.log('parent get children', this.props.children)
    }
    componentWillReceiveProps(nextProps) {
        console.log('...调用componentWillReceiveProps,这里可以更改state',nextProps, this.props);
        this.setState({
            c: nextProps.count
        })
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount====');
    }
    onClick() {
        /**
         * UnMount
         * 必须调用定容容器？
         * 从最外层的app 递归的unmount
         * 如果是通过<Parent><Child></Child<</Parent>
         * 那么Child 的销毁方法不会被调用
         *
         */
        var ospan = document.getElementById('react-dom');
        var com = ospan;
        console.log(com);
        ReactDOM.unmountComponentAtNode(
            com
        );
        com.remove()
    }
    render () {
        console.log('...调用render');
        return (<div>
                这是子元素接收父元素的状态{this.props.count}
                子元素的状态{this.state.c}
                <span id="aaa" onClick={this.onClick}>111aaa</span>
            </div>);
    }
}

class Grandson extends React.Component {
    constructor(props) {
        super(props)
    }
    alertMsg() {
        alert(11)
    }
    render() {
        return (<div>grandson tag</div>);
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount-Grandson====');
    }
}
export default class Ceshi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:1
        }
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount-Ceshi====');
    }
    onClick(e) {
        var count = this.state.count;
        this.setState({
            count: ++count
        });
        console.log(this.props.children, '--children--');
        this.refs.test.alertMsg();
    }
    render () {
        console.log(this.state);
        return (
            <div id="test">
                <Link to="/">回到首页</Link>
                <Link to="/ceshi/pageinfo/12">12</Link>
                <Link to="/ceshi/pageinfo/13">13</Link>
                <button id="112" data-id="89" data-extenda="12" onClick={this.onClick.bind(this)}>点击</button>
                <ChildApp {...this.state}>
                    {<Grandson></Grandson>}
                    // 这种嵌套不生效
                </ChildApp>
                <Grandson ref="test"></Grandson>
                <Grandson></Grandson>
            </div>
        );
    }
}
