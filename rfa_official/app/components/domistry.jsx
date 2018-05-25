import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/domistry.scss';
import { hostname, publicPath } from '../config/env.js';

// let domistryInfo = [{
// 	id: 0,
// 	department: '技术部',
// 	intro: '部门工作及主要活动介绍我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......',
// 	image: [
// 		'../images/444.jpg',
// 		'../images/444.jpg',
// 		'../images/444.jpg'
// 	]
// }]

let domistryInfo = []

class Domistry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			domistryInfo
		}
	}

	componentDidMount() {
		var that = this;
		var department = new XMLHttpRequest();
        department.open('GET', hostname + '/api/about/department', true);
        department.onload = function() {
            if (department.status >= 200 && department.status < 400) {
                // Success!
                var res = JSON.parse(department.responseText);
                that.setState({domistryInfo: res})
            }
        };
        department.onerror = function() {
            // There was a connection error of some sort
        };
        department.send();
	}

	render() {

		return (
			<div className="domistry">
				{
					this.state.domistryInfo.map((item) => {
						return (
							<div key={item.id} className="domistry">
								<h5>{item.department}</h5>
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

export default Domistry