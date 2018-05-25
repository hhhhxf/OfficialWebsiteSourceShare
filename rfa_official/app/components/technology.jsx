import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/domistry.scss';
import { hostname, publicPath } from '../config/env.js';

// let technology = [{
// 	id: 0,
// 	department: '软件小组',
// 	intro: '部门工作及主要活动介绍我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......',
// 	image: [
// 		'../images/444.jpg',
// 		'../images/444.jpg',
// 		'../images/444.jpg'
// 	]
// }]
let technology = []

class Technology extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			technology
		}
	}

	componentDidMount() {
		var that = this;
		var technology = new XMLHttpRequest();
        technology.open('GET', hostname + '/api/about/technical', true);
        technology.onload = function() {
            if (technology.status >= 200 && technology.status < 400) {
                // Success!
                var res = JSON.parse(technology.responseText);
                that.setState({technology: res})
            }
        };
        technology.onerror = function() {
            // There was a connection error of some sort
        };
        technology.send();
	}

	render() {

		return (
			<div className="domistry">
				{
					this.state.technology.map((item) => {
						return (
							<div key={item.id} className="domistry">
								<h5>{item.group}</h5>
								<p className="domistry-job">{item.intro}</p>
								{ item.image.map((img) => {
									return (<img className="domistry-image" src={ publicPath + img } />)
								})}
							</div>
							)
					})
				}
			</div>
			)
	}
}

export default Technology