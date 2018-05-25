import React from 'react';
import Carousel from "../components/Carousel.jsx";
import RfaActivity from '../components/RfaActivity.jsx';
import TechShare from '../components/TechShare.jsx';
import { hostname } from "../config/env.js";

const imageData = [
    {
        image:'./images/carousel1.jpg',
        alt:'carousel1',
        title:'无线杯电子设计十校联赛开始报名',
        content:'协会动态/近期活动'
    },
    {
        image:'./images/carousel2.jpg',
        alt:'carousel2',
        title:'xxxqq',
        content:'aaa'
    },
    {
        image:'./images/carousel3.jpg',
        alt:'carousel3',
        title:'xxxddds',
        content:'aaacde'
    },
    {
        image:'./images/carousel4.jpg',
        alt:'carousel4',
        title:'xvdvgxxsz',
        content:'ewefv'
    },
    {
        image:'./images/carousel5.bmp',
        alt:'carousel5',
        title:'dsav',
        content:'mbtg'
    }
]

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData
        }

    }
    
    componentDidMount() {
        var that = this;

        var caresoul = new XMLHttpRequest();
        caresoul.open('GET', hostname + '/api/home/caro', true);
        caresoul.onload = function() {
            if (caresoul.status >= 200 && caresoul.status < 400) {
                var res = JSON.parse(caresoul.responseText);
                that.setState({imageData: res})
            }
        };
        caresoul.onerror = function() {
            // There was a connection error of some sort
        };
        caresoul.send();
    }

    render(props) {
       /*let nowLocal = 0;*/
        return (
            <div className="home-container">
                <Carousel items={this.state.imageData} speed={2.5}/>
                <RfaActivity />
                {/*<TechShare />*/}
            </div>
        );
    }
}

export default HomeContainer;