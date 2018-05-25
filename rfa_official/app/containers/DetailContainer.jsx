import React from 'react';
import SideItem from '../components/ActivityItem.jsx';
import '../style/containers/WhiteContainer.scss';
import ArticleItem from '../components/ArticleItem.jsx';
import DetailContent from '../components/DetailContent.jsx';
import  '../style/components/DetailContent.scss';

class DetailContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="white-container">
                <div>
                    <DetailContent />
                </div>
            </div>
        )
    }
}

export default DetailContainer