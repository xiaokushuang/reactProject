import React, {Component} from 'react';
import {HeaderWrap} from "./styledCookbook";
import './cookbook.css'
class Header extends Component {
    render() {
        return (
            <div>
                <div className="headerClass">
                    className形式的样式
                </div>
                {/*引入styled*插件形式的样式写法*/}
                <HeaderWrap>
                    引入styled插件形式的样式写法
                </HeaderWrap>
                <div style={{height: '2.44rem',
                    background: '#ee742f',
                    lineHeight: '2.44rem',
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: '1.18rem'}}>内联样式的写法</div>
            </div>
        );
    }
}

export default Header;