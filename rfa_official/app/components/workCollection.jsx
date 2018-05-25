import React from "react";
import { Link } from 'react-router';
import '../style/containers/workCollection.scss';
import PageBar from "../components/pageBar.jsx"
import { hostname, publicPath } from '../config/env.js';

const info =  {
    pageIndex: 1,
    collection: []
    // collection: [{
    //         id: 11,
    //         title:'迷你小蛮腰',
    //         src:'../images/picture.jpg',
    //         introduction:'这是间接简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介'
    //     }]
};

class WorkCollection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            info
        }
    }

    selectPageIndex(pageIndex) {
        var that = this;
		var selectPageIndex = new XMLHttpRequest();
        selectPageIndex.open('GET', hostname + '/api/activity/collect?pageSize=9&pageIndex=' + pageIndex , true);
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
        listInit.open('GET', hostname + '/api/activity/collect?pageSize=9&pageIndex=' + info.pageIndex , true);
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
        var workList =[];
        workList = this.state.info.collection.map((item,index) => {
            return (
                <div className="workCollectionItem" key={item.id}>
                    <img src={ publicPath + item.picUrl}/>
                    <div>
                        <h4>{item.title}</h4>                    
                        <p>{item.abstract}</p>
                    </div>                   
                </div>
                
            )
        });
        return(
            <div className="workCollectionContainer">
                <div>{workList}</div>
                <PageBar totalNumber={this.state.info.totalPage} selectPageIndex={ pageIndex => this.selectPageIndex(pageIndex) } />
            </div>
        )
    }
}

export default WorkCollection