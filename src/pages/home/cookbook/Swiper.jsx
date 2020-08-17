import React, {Component} from 'react';
import {Carousel, WingBlank} from 'antd-mobile';
//引入样式
import {SwiperWrap} from "./styledCookbook"
//引入图片
import swiper1 from "assets/swiper1.png"
import swiper2 from "assets/swiper2.png"
import swiper3 from "assets/swiper3.png"
import swiper4 from "assets/swiper4.png"
class Swiper extends Component {

    render() {
        return (
            <SwiperWrap>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    <img src={swiper1} alt=""/>
                    <img src={swiper2} alt=""/>
                    <img src={swiper3} alt=""/>
                    <img src={swiper4} alt=""/>
                </Carousel>
            </SwiperWrap>
        );
    }
}

export default Swiper;