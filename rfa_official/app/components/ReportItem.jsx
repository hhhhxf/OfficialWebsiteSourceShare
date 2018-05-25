import React from 'react';
import { Link } from 'react-router';
import '../style/components/ReportItem.scss';
import PageBar from "../components/pageBar.jsx"
import { hostname, publicPath } from '../config/env.js';


const info = {
    pageIndex: 1,
    report: []
    // "report": [{
    //     "id": "17051501", //最后两位可用16位？（如果不够表示一天的文章数,还可以用26位，喵喵喵）
    //     "title": "无线杯电子设计大赛",
    //     "abstract": "摘要我是内容我是内容我是内容，我是内容我是内容我是内容我是。内容我是内容我是内，容我是内容我是内容我是内容我。我是内容我是内容我是内容我是内容我是内容，我是内容我是内容我是内容。我是内容我是内容我是内容我是....",
    //     "updateTime": "1491663998",
    //     "picUrl": "../images/whatpic"
    // }]
}

class ReportItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info
        }
    }

    switchTimestamp(stamp) {
        let normal = new Date(parseInt(stamp)*1000);
        return normal.toLocaleString('chinese',{hour12: false}).replace(/\//g, '-');
    }

    selectPageIndex(pageIndex) {
        var that = this;
		var selectPageIndex = new XMLHttpRequest();
        selectPageIndex.open('GET', hostname + '/api/activity/report?pageSize=8&pageIndex=' + pageIndex , true);
        selectPageIndex.onload = function() {
            if (selectPageIndex.status >= 200 && selectPageIndex.status < 400) {
                // Success!
                var res = JSON.parse(selectPageIndex.responseText);
                that.setState({info: res})
            }
        };
        selectPageIndex.onerror = function() {
            // There was a connection error of some sort
        };
        selectPageIndex.send();
    }

    componentDidMount() {
        var that = this;
		var listInit = new XMLHttpRequest();
        listInit.open('GET', hostname + '/api/activity/report?pageSize=8&pageIndex=' + info.pageIndex , true);
        listInit.onload = function() {
            if (listInit.status >= 200 && listInit.status < 400) {
                // Success!
                var res = JSON.parse(listInit.responseText);
                that.setState({info: res})
            }
        };
        listInit.onerror = function() {
            // There was a connection error of some sort
        };
        listInit.send();
    }

    render() {
        let _this = this;
        let ReportArray = this.state.info.report.map(function(item) {
            let getTime = _this.switchTimestamp(item.updateTime);
            return (
                <Link key={ item.id } className="report-item" to={ "/detail?id=" + item.id }>
                    <img src={ publicPath + item.picUrl }/>
                    <div className="column">
                        <p className="title">{ item.title }</p>
                        <span className="date">{ getTime }</span>
                        <p className="abstruct">{ item.abstract }</p>
                    </div>
                    <i className="fa fa-angle-right"></i>
                </Link>
            );
        });
        //let the height be decided by the number of report
        let autoHeight = {
            height: ReportArray.length * 183 + 24 + 'px'
        };
        return (
            <div className="report-body" style={autoHeight}>
                { ReportArray }
                <PageBar totalNumber={this.state.info.totalPage} selectPageIndex={ pageIndex => this.selectPageIndex(pageIndex) } />
            </div>
        )
    }
}

export default ReportItem;