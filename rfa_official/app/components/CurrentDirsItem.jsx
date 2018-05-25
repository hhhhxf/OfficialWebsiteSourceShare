import React from 'react';
import ReactDOM from 'react-dom';
import '../style/components/CurrentDirsItem.scss'
import { hostname, publicPath } from '../config/env.js';

// const currentinfo=[{
// 	id:0,
// 	image:'./iamge/444.jpg',
// 	position:'会长',
// 	name:'周子键'
// },{
// 	id:1,
// 	image:'./image/444.jpg',
// 	position:'技术总监',
// 	name:'杨代辉'
// }]
const currentinfo = []

class CurrentDirsItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentinfo
		}
	}

	componentDidMount() {
		var that = this;
		var director = new XMLHttpRequest();
        director.open('GET', hostname + '/api/about/director', true);
        director.onload = function() {
            if (director.status >= 200 && director.status < 400) {
                // Success!
                var res = JSON.parse(director.responseText);
                that.setState({currentinfo: res})
            }
        };
        director.onerror = function() {
            // There was a connection error of some sort
        };
        director.send();
	}

	render(){
		 
		return(
			<div className="CurrentDirsItem">
				{
					this.state.currentinfo.map((item) => {
						return(
							<div key={item.id} className='content-Cur' >
								<img src={publicPath + item.image} />
								<div>
									<h5>{item.position}</h5>
									<p>{item.name}</p>
								</div>
								<div>
									<p className="wish">{item.wish}</p>
								</div>
							</div>
							)
					})
				} 
			</div>
		)
	}
}
export default CurrentDirsItem