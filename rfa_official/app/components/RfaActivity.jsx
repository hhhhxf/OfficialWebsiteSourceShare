import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import  '../style/components/techShare.scss';
import { hostname, publicPath } from '../config/env.js';

// let rfaActivity = [{
// 	id: 0,
//     title: 'xxoo',
//     abstract: 'xxooxxooxxooxxoo',
//     image: '../images/picture.jpg'
// },{
//     id: 1,
//     title: 'xxoo',
//     abstract: 'xxooxxooxxooxxoo',
//     image: '../images/picture.jpg' 
// }]

class RfaActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            rfaActivity: []
		}
	}

	componentDidMount() {
		var that = this;
		var rfaActivity = new XMLHttpRequest();
        rfaActivity.open('GET', hostname + '/api/home/dynamic', true);
        rfaActivity.onload = function() {
            if (rfaActivity.status >= 200 && rfaActivity.status < 400) {
                // Success!
                var res = JSON.parse(rfaActivity.responseText);
                that.setState({rfaActivity: res})
            }
        };
        rfaActivity.onerror = function() {
            // There was a connection error of some sort
        };
        rfaActivity.send();
	}

	render() {

		return (
            <div className="tech-share">
                <h1>协会动态</h1>
				{
                    this.state.rfaActivity.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link to={`/detail?id=${item.url}`}>
                                    <h1>{item.title}</h1>
                                    <img src={ publicPath + item.image}/>
                                    <p>{item.abstract}</p>
                                </Link>
                            </div>
                        )
                    })
                }
			</div>
			)
	}
}

export default RfaActivity