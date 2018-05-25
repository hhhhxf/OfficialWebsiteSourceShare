import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/techShare.scss';
import { hostname, publicPath } from '../config/env.js';

let techShare = [{
	id: 0,
    title: 'xxoo',
    abstract: 'xxooxxooxxooxxoo',
    image: '../images/picture.jpg'
},{
    id: 1,
    title: 'xxoo',
    abstract: 'xxooxxooxxooxxoo',
    image: '../images/picture.jpg' 
}]

class TechShare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			techShare
		}
	}

	componentDidMount() {
		var that = this;
		var techShare = new XMLHttpRequest();
        techShare.open('GET', hostname + '/api/home/dynamic', true);
        techShare.onload = function() {
            if (techShare.status >= 200 && techShare.status < 400) {
                // Success!
                var res = JSON.parse(techShare.responseText);
                that.setState({techShare: res})
            }
        };
        techShare.onerror = function() {
            // There was a connection error of some sort
        };
        techShare.send();
	}

	render() {

		return (
			<div className="tech-share">
            <h1>技术分享</h1>
            {
                this.state.techShare.map((item) => {
                    return (
                        <div key={item.id}>
                            <a href={item.url}>
                                <h1>{item.title}</h1>
                                <img src={item.image}/>
                                <p>{item.abstract}</p>
                            </a>
                        </div>
                    )
                })
            }
        </div>
			)
	}
}

export default TechShare