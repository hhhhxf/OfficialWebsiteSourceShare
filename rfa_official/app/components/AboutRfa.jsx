import React from 'react';
import ReactDOM from 'react-dom';
import '../style/components/AboutRfa.scss';
import { hostname, publicPath } from '../config/env.js';

// const AboutRfainfo={
// 	leftcontent:[
// 	{
// 		id:0,
// 		title:'xxoo',
// 		content:'xxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxoo'
// 	},{
// 		id:1,
// 		title:'xxoo',
// 		content:'xxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxooxxoo',
// 	}],
// 	rightcontent:[
// 	{
// 		id:2,
// 		image:'./image/xxoo.jpg'
// 	},{
// 		id:3,
// 		image:'./image/xxoo.jpg'
// 	},{
// 		id:4,
// 		image:'./image/xxoo.jpg'
// 	}]
// }
const AboutRfainfo = {
	leftcontent: [],
	rightcontent: []
}

class AboutRfa extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			AboutRfainfo
		}
	}

	componentDidMount() {
		var that = this;

        var association = new XMLHttpRequest();
        association.open('GET', hostname + '/api/about/association', true);
        association.onload = function() {
            if (association.status >= 200 && association.status < 400) {
                var res = JSON.parse(association.responseText);
                that.setState({AboutRfainfo: res})
            } 
        };
        association.onerror = function() {
            // There was a connection error of some sort
        };
        association.send();
	}

	render(){

		return(
			<div className='AboutRfa'>
				<div className='left'>
					{ this.state.AboutRfainfo.leftcontent.map((item) => {
						return(
							<div key={item.id} className='leftcontent'>
							<h5>{item.title}</h5>
							<p>{item.content}</p>
							</div>
							)
					})}
				</div>
				<div className='right'>
					{ this.state.AboutRfainfo.rightcontent.map((item) => {
						return(
							<div key={item.id} className='rightcontent'>
							<img src={publicPath + item.image} />
							</div>
						)
					})}
				</div>

			</div>
		)
	}
}

export default AboutRfa