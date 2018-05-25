import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/recentAct.scss';
import { hostname, publicPath } from '../config/env.js';

let activity = {
	id: 0,
	title: '无线杯电子设计大赛',
	content: '',
	schedule: [{
		stage: '比赛报名',
		beginTime:'2017.01.28',
		endTime: '2017.04.09',
		place:'A442'
	}, {
		stage: '开题大会',
		beginTime:'2017.01.28',
		endTime: '2017.04.09',
		place:'A442'
	}]
};

class Activity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activityInfo: []
		}
	}
	componentDidMount () {
		var that = this;
        var association = new XMLHttpRequest();
        association.open('GET', hostname + '/api/activity/active', true);
        association.onload = function() {
            if (association.status >= 200 && association.status < 400) {
                var res = JSON.parse(association.responseText);
                that.setState({activityInfo: res})
            } 
        };
        association.onerror = function() {
            // There was a connection error of some sort
        };
        association.send();
	}
	render() {
		return (
			<div className="recent-activiy">
				{
					this.state.activityInfo.map((item)=>{
						return (
							<div key={item.id}>
								<div className="msg">
									<h1>{item.title}</h1>
									<h2>活动简介</h2>
									<p>{item.abstract}</p>
									<h2>日程表</h2>
									<table>
										<thead>
											<tr>
												<th>阶段</th>
												<th>时间</th>
												<th>地点</th>
											</tr>
										</thead>
										<tbody>
											{
												item.schedule.map((info)=>{
													return (
														<tr>
															<td>{info.stage}</td>
															<td>{info.beginTime}~{info.endTime}</td>
															<td>{info.place}</td>
														</tr>
													)
												})
											}
										</tbody>
									</table>
									<h2>报名方式</h2>
									<ul>
										{
											item.way.map((way,index)=>{
												let content = <li key={index}>{way.wayname}: {/^(http|https).*/.test(way.waycontent)? <a target="_blank" href={way.waycontent}>点击报名</a>:way.waycontent}</li>
												return content
											})
										}
									</ul>
								</div>
								<img src={publicPath + item.poster} />
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Activity