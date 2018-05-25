import React from 'react';
import { hostname, publicPath } from '../config/env.js';

let articleContent = {
    title: '无线杯电子设计大赛活动报道',
    time: '2017-01-01',
    content: ' 我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是......'
}
let articleComment = [
    {
        username: '呵呵',
        advatar: 'xx.jpg',
        time: '4小时前',
        comment: '评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论。'
    },
    {
        username: '呵呵',
        advatar: '22.jpg',
        time: '4小时前',
        comment: '评论评论评论评论评论评论评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论。'
    }
]

class DetailContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advise: {}
        }
    }

    componentDidMount() {
        var id = location.search;
		var that = this;
        var detail = new XMLHttpRequest();
        detail.open('GET', hostname + '/api/article/details'+ id, true);
        detail.onload = function() {
            if (detail.status >= 200 && detail.status < 400) {
                // Success!
                var res = JSON.parse(detail.responseText);
                that.setState({
                    advise: res
                })
            }
        };
        detail.onerror = function() {
            // There was a connection error of some sort
        };
        detail.send();
	}
     
    render () {
        return (
            <div className="detail-content">
                <div className="comment-content">
                    <h1>{this.state.advise.title}</h1>
                    {this.state.advise.time?<span>{this.state.advise.time}</span>:null}
                    <div dangerouslySetInnerHTML={{__html: this.state.advise.content}}></div>
                </div>
                {/*<div className="comment">
                    <nav>评论</nav>
                    <form>
                        <img src="userAdvatar"/>
                        <textarea placeholder="添加评论"></textarea>
                        <input type="submit" value="发表评论"/>
                    </form>
                    { articleComment.map((comment)=>{
                        return (
                            <div className="comment-wrap">
                                <img src={comment.advatar}/>
                                <div>
                                    <span>{comment.username}</span>
                                    <span>{comment.time}</span>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>*/}
            </div>
        )
    }
}

export default DetailContent;