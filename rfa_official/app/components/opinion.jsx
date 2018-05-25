import React from 'react';
import ReactDOM from 'react-dom';
import '../style/components/opinion.scss';
import { hostname, publicPath } from '../config/env.js';

let opinionData = [
	{
        feedback: {
            time: "4小时前",
            content: "有BUG"
        },
        response: {
            time: "3小时前",
            content: "请问具体是什么BUG？"
        }
	},
	{
        feedback: {
            time: "2小时前",
            content: "大BUG"
        },
        response: {
            time: "1小时前",
            content: "。。。"
        }
    }
]

class Opinion extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			opinion:[]
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		var that = this;

        var advise = new XMLHttpRequest();
        advise.open('GET', hostname + '/api/advise/list', true);
        advise.onload = function() {
            if (advise.status >= 200 && advise.status < 400) {
                var res = JSON.parse(advise.responseText);
                that.setState({opinion: res})
            } 
        };
        advise.onerror = function() {
            // There was a connection error of some sort
        };
        advise.send();
	}
	handleSubmit(e) {
		e.preventDefault();
		var data = this.refs.advise.value;
		var that = this;
		var formData = new FormData();
		formData.append("mes",data);
		var request = new XMLHttpRequest();
		request.open('post', hostname + '/api/advise/send', true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var res = JSON.parse(request.responseText);
				if(res.state === "success") {
					alert("您的意见已提交成功！");
					that.refs.advise.value = '';
				}
				if(res.state === "failed") {
					alert(res.mes);
				}
			} 
		};
		request.onerror = function() {
			// There was a connection error of some sort
		};
		// request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		request.send(formData);
	}

	render(){

		return(
			<div className="opinion">
				<form>
					<textarea placeholder="请填写具体内容帮助我们更好的了解您的意见与建议" ref="advise"></textarea><br/>
					<input type="submit" value="提交" onClick={this.handleSubmit}/>
				</form>
				<div className='feedback-wrap'>
					<h1>我的反馈</h1>
					{
						this.state.opinion.map((item,index)=>{
							return (
								<div key={index}>
									<div className="feedback">
										<p className="time">{/*item.feedback.time*/} 反馈</p>
										<p className="feedback-content">{item.fcontent}</p>
									</div>
									{item.rcontent? <div className="response">
										<p className="time">{/*item.response.time*/} 回复</p>
										<p className="response-content">{item.rcontent}</p>
									</div>:null}				
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default Opinion