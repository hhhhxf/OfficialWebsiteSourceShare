import React from 'react';
import ReactDOM from 'react-dom';
import '../style/components/contact.scss';
import { hostname, publicPath } from '../config/env.js';


class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		// var that = this;

        // var association = new XMLHttpRequest();
        // association.open('GET', hostname + '/api/about/association', true);
        // association.onload = function() {
        //     if (association.status >= 200 && association.status < 400) {
        //         var res = JSON.parse(association.responseText);
        //         that.setState({AboutRfainfo: res})
        //     } 
        // };
        // association.onerror = function() {
        //     // There was a connection error of some sort
        // };
        // association.send();
	}

	render(){

		return(
			<div className='contact'>
				<p>E-mail：scut_wuxie@163.com</p>
				<p>QQ：791550118</p>
				<p>地址：广东省广州市华南理工大学五山校区</p>
				<p>第35届无协会员QQ群：651013027</p>
				<p>新浪微博：华工无线电爱好者协会</p>
				<p>官方微信：SCUT无协</p>
				<p>扫一扫，立刻关注官方微信公众号：</p>
				<img src="./images/small-R.jpg"/>
			</div>
		)
	}
}

export default Contact