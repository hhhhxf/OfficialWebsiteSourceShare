import React from "react"
import '../style/components/Carousel.scss'
import { publicPath } from '../config/env.js';

class CarouselItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item;
        let count = this.props.count;
        let width = 100 / count + '%';//计算它占父组件的百分比
        return (
            <li className="carousel-item" style={{width:width}}>
                <img src={ publicPath + item.image}/>
                <span className="carousel-text">{item.title}</span>
                <span className="carousel-address">{item.content}</span>
            </li>
        );
    }
}

class CarouselDots extends React.Component {
    constructor(props) {
        super(props);
    }
    handleDotClick(i) {
        var option = i - this.props.nowLocal;
        this.props.turn(option);
    }
    render() {
        let dotNodes = [];
        let count = this.props.count;
        let nowLocal = this.props.nowLocal;
        for(let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span key = {'dot' + i} className  ={ "carousel-dot" + (i === this.props.nowLocal?" carousel-dot-selected":"")} onClick={this.handleDotClick.bind(this,i)}></span>
            )
        }
        return (
            <div className="carousel-dots-wrap">
                {dotNodes}
            </div>
        )
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal:0
        }
    }
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }
    goPlay() {
        this.autoPlayFlag = setInterval(()=> {
            this.turn(1);
        },2100);
    }
    turn(n) {
        var weizhi = this.state.nowLocal;
        var _n = this.state.nowLocal + n;
        if(_n < 0) {
            _n = _n + this.props.items.length;
        }
        if(_n >= this.props.items.length) {
            _n = _n - this.props.items.length;
        }
        this.setState({
            nowLocal: _n
        })
    }
    componentDidMount() {
        this.goPlay();
    }
    componentWillUnmount() {
        clearInterval(this.autoPlayFlag);
    }
    render() {
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item,index) => {
            return <CarouselItem item={item} count={count} key={'item'+index}/>
        });
        let dotsNode = <CarouselDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal}/>;
        return (
            <div className="carousel" onMouseOver={this.pausePlay.bind(this)} onMouseOut={this.goPlay.bind(this)}>
                <ul style={{ left: -100*this.state.nowLocal+"%",transitionDuration:this.props.speed+"s",width:this.props.items.length*100+"%"}}>
                    {itemNodes}
                </ul>
                {dotsNode}
            </div>
        );
    }
}
Carousel.autoPlayFlag = null;

export default Carousel;