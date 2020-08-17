import React, {Component} from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
//引入样式
import {SearchWrap} from './styledSearch'
class Search extends Component {
    state = {
        value: '',
    };
    onChange= (value) => {
        this.setState({ value });
        console.log('输入内容',value)
    };
    render() {
        return (
            <SearchWrap>
                <SearchBar value={this.state.value} onChange={this.onChange} placeholder="想吃什么搜这里，如川菜" maxLength={8} />
            </SearchWrap>
        );
    }
}

export default Search;