import React from 'react';
import SideItem from '../components/ShareItem.jsx';
import '../style/containers/WhiteContainer.scss';
import PageBar from "../components/pageBar.jsx";

import QuestionModel from '../components/QuestionModel.jsx';

var responseData = {
    totalNumber:9,
};
var contentHeight=500;
class ShareContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            model: false
        }
    }
    handleClick(){
        this.setState({
            model: true
        })
    }
    handleShow(){
        this.setState({
            model: false
        });
    }
    componentDidMount(){
        var content = this.refs.content;
        console.log(content);
        const styles = content.ownerDocument.defaultView.getComputedStyle(content,null);
        const height = parseFloat(styles.height.indexOf('px') !== -1 ? styles.height : 0);
        console.log(height);
        contentHeight = height;
    }
    render(props) {
        return (
            <div className="white-container">
                <SideItem/>
                { this.state.model? <QuestionModel handleShow={this.handleShow.bind(this)} contentHeight={contentHeight}/> : null }
                <div className="content" ref="content">
                    <button onClick={this.handleClick}>我要提问</button>
                </div>
                <div className="paging">
                    <PageBar totalNumber={responseData.totalNumber}/>
                </div>
            </div>
        );
    }
}

export default ShareContainer;