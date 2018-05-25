import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/aboutActivity.scss';

{/*少了图片？*/}
const activity = [{
	id: 0,
	img: 'https://ps.ssl.qhimg.com/sdmt/136_135_100/t01cf295a2611b2719f.jpg',
	title: '无线杯电子设计大赛',
	date:'2017-01-01',
	content:'我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......'
}, {
	id: 1,
	img: 'https://ps.ssl.qhimg.com/sdmt/136_135_100/t01cf295a2611b2719f.jpg',
	title: '无线杯电子设计大赛',
	date:'2017-01-01',
	content:'我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......'
}, {
	id: 2,
	img: 'https://ps.ssl.qhimg.com/sdmt/136_135_100/t01cf295a2611b2719f.jpg',
	title: '无线杯电子设计大赛',
	date:'2017-01-01',
	content:'我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......'
}]

class ReportActivity extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		let sidebarArray = activity.map(function(item) {
			return (
				<div className="report-all">
					<div key={item.id}>
					<div className="report-content">
					<img className="report-img" src={item.img} />
					<div className="right-content">
					
					<h3 className="report-title">{item.title}</h3>
					<h3 className="update-date">{item.date}</h3>
					
					<p className="update-content">{item.content}</p>

					</div>
					</div>
					</div>
					<div className="report-lt">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</div>
				</div>
		)})
		return (
			<div>
				{sidebarArray}
			</div>
			)
	}
}

export default ReportActivity 