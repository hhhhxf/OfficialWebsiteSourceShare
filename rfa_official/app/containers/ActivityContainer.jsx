import React from 'react';
import SideItem from '../components/ActivityItem.jsx';
import WorkCollection from "../components/workCollection.jsx"
import ReportItem from '../components/ReportItem.jsx';
import ArticleItem from '../components/ArticleItem.jsx';
import RecentAct from '../components/recentAct.jsx';
import '../style/containers/WhiteContainer.scss';


var responseData = {
    totalNumber:9,
};

class ActivityContainer extends React.Component {
    constructor(props) {
        super(props);
        let {info} = this.props;
    }

    render(props) {
        if(window.location.hash=='') {
            window.location.hash='#recent'
        }
        // let temp = {
        //     overlook: function overlook(props) {
        //         return (
                    // <div className="white-container">
                    //     <SideItem/>
                    //     <div className="content"> 
                    //         {(window.location.hash === '#recent') ? <RecentAct/> : null}
                    //         {(window.location.hash === '#report') ? <ReportItem/> : null}
                    //         {(window.location.hash === '#collection') ? <WorkCollection workCollection={responseData.workCollection}/> : null}
                    //     </div>
                    //     {/*<div className="paging">
                    //         <PageBar totalNumber={responseData.totalNumber}/>
                    //     </div>*/}
                    // </div>
        //         )
        //     },
        // }
                
        // return (window.location.hash.match(/\#\w+$/)) ? <temp.overlook/> : <ArticleItem />;
        if( window.location.hash === '#recent' ) {
            return (
                    <div className="white-container">
                        <SideItem/>
                        <div className="content"> 
                             <RecentAct/>
                        </div>
                    </div>
            )
        }else if(window.location.hash === '#report') {
            return (
                <div className="white-container">
                    <SideItem/>
                    <div className="content"> 
                        <ReportItem/>
                    </div>
                </div>
            )
        }else if(window.location.hash === '#collection' ) {
            return (
                <div className="white-container">
                    <SideItem/>
                    <div className="content"> 
                        <WorkCollection workCollection={responseData.workCollection}/>
                    </div>
                </div>
            )
        }else {
            <div className="white-container">
                <SideItem />
                <div className="content"></div>
            </div>
        }
    }
}

export default ActivityContainer;