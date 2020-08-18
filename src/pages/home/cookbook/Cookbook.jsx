import React, {Component} from 'react';
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/search/Search'
import HotSort from './HotSort'
class Cookbook extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Swiper></Swiper>
                <Search></Search>
                <HotSort></HotSort>
            </div>
        );
    }
}

export default Cookbook;