import React from 'react'
import CannotFind from '../components/CannotFind.jsx'
import TextareaItem from '../components/TextareaItem.jsx'
import '../style/containers/WhiteContainer.scss'
import '../style/components/ArticleItem.scss'

let response = {
    state: "success",
    content: "<p class=\"title\">标题设计大赛</p><span class=\"date\">2017-05-15</span><p class=\"para\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p><p class=\"para\">我是内容我是内容我是内容</p><p class=\"para\">我是内容我是内容我是内容</p>"
}
let info = [/*{
    order: 0,
    name: "章节"
},*/{
    order: 1,
    name: "评价"
}/*, {
    order: 2,
    name: "提问"
}*/];
let evaluate = {
    state: "success",    //"success"为成功；"fail"为失败，并且以下的参数不会出现
    totalPage: "3",  //总的页数
    comment: [{
        id: "001",
        user: "零度·冰华",
        createTime: "1492405720267",
        thumbUpNum: '8',
        content: "yes",
        isThumbUp: "1"
    }, {
        id: "011",
        user: "游泽渠",
        createTime: "1492405720167",
        thumbUpNum: '5',
        content: "啦啦啦",
        isThumbUp: "1"
    }, {
        id: "021",
        user: "彭归航",
        createTime: "1492405720260",
        thumbUpNum: '4',
        content: "发生什么",
        isThumbUp: "0"
    }, {
        id: "031",
        user: "陈建",
        createTime: "14924057202",
        thumbUpNum: '6',
        content: "哦",
        isThumbUp: "0"
    }, {
        id: "041",
        user: "王忆麟",
        createTime: "149240572026",
        thumbUpNum: '7',
        content: "就很尴尬",
        isThumbUp: "1"
    }]
}

class Article extends React.Component{
    constructor(props) {
        super(props);
        this.agreeNum = this.agreeNum.bind(this);
        this.state = {
            order: '1'
        }
    }
    findArticle() {
        //We will send the article's id to the after end. If we find the article, set isFindArticle to true.
        //...*************************************
        return window.location.hash.match(/\#\w+\?id\=\d+$/);
    }
    switchOrder() {
        //******************************
        console.log(this);
    }
    sometimesBefore(unixTime) {
        let unixt = new Date(parseInt(unixTime));
        let nowt = new Date();
        let tbefore = '刚刚';
        if(tbefore = nowt.getUTCFullYear() - unixt.getUTCFullYear()) {
            tbefore += '年前';
        } else if(tbefore = nowt.getUTCMonth() - unixt.getUTCMonth()) {
            tbefore += '个月前';
        } else if(tbefore = nowt.getUTCDay() - unixt.getUTCDay()) {
            tbefore += '天前';
        } else if(tbefore = nowt.getUTCHours() - unixt.getUTCHours()) {
            tbefore += '小时前';
        } else if(tbefore = nowt.getUTCMinutes() - unixt.getUTCMinutes()) {
            tbefore += '分钟前';
        }
        return tbefore;
    }
    agreeNum(e) {
        //...*************************************
        return e;
    }
    render(props) {
        let _this = this;
        let temp = {
            tips: function tips(props) {
                //switch the small navigator
                let tipsArray = info.map(function(item) {
                    return <li key={item.order} className={ parseInt(_this.state.order) === item.order?'clicked':'unclicked' }>{ item.name }</li>
                });
                return (
                    <div className="tips">
                        { tipsArray }
                    </div>
                );
            },
            eva: function eva(props) {
                //others' evaluations
                let evaArray = evaluate.comment.map(function(item) {
                    return (
                        <div key={item.createTime} className="others">
                            <img src="images/rfa_icon_x64.jpg" className="circle"/>
                            <span className="title">{ item.user }</span>
                            <span className="date">{ _this.sometimesBefore(item.createTime) }</span>
                            <span className={ parseInt(item.isThumbUp)?"iclicked":"iunclicked" }><i className="fa fa-thumbs-up" aria-hidden="true" onClick={ _this.agreeNum }></i>{ item.thumbUpNum }</span>
                            <p>{ item.content }</p>
                        </div>
                    )
                });
                return (
                    <div className="evaluate">
                        { evaArray }
                    </div>
                )
            },

            art: function art() {
                return(
                    <div className="white-container">
                        <div className="article-container">
                            <div className="article-body" dangerouslySetInnerHTML={{__html: response.content}}></div>
                            <temp.tips />
                            <TextareaItem />
                        </div>
                        <temp.eva />
                        <div className="btpaging">
                            { /* 分页 */ }
                        </div>
                    </div>
                )
            }
        }

        //render all
        return _this.findArticle()?<temp.art/>:<CannotFind />;
    }
}

export default Article;