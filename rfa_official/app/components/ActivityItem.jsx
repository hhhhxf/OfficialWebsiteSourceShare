import React from 'react'
import '../style/components/SideItem.scss'
import {Link} from 'react-router'

const info = [{
    text: "近期活动",
    router: "#recent",
    index: 0
}, {
    text: "活动报道",
    router: "#report",
    index: 1
}, {
    text: "作品锦集",
    router: "#collection",
    index: 2
}];

class ActivityItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        let sidebarArray = info.map(function(item) {
            return (
                <div key={item.index} className="side-item">
                    <Link className={ item.router==window.location.hash?'clicked':'' } to={'/activity' + item.router }>{ item.text }</Link>
                </div>
            )
        });

        return (
            <div className="sidebar">
                {sidebarArray}
            </div>
        );
    }
}

export default ActivityItem;