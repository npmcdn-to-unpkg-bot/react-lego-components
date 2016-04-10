import React from 'react'
import classnames from 'classnames'
import './index.scss'
export default class Test extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const divStyle = {
          color: 'blue',
          fontSize: '20px',
        };
        let liStyle = classnames({
            testaa: true,
        });
        return (
            <ul style={divStyle} className="_namespace">
                <li>1111</li>
                <li className={'test'}>1111</li>
                <li className={liStyle}>1111</li>
                <li>2222</li>
            </ul>
        );
    }
}
