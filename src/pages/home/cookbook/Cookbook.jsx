import React, {Component} from 'react';
import Header from './Header'
import Swiper from './Swiper'
import Search from '@/search/Search'
class Cookbook extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Swiper></Swiper>
                <Search></Search>
            </div>
        );
    }
}

export default Cookbook;