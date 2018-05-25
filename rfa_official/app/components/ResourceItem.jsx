import React from 'react'
import '../style/components/SideItem.scss'
import {Link} from 'react-router'

const info = [{
	text: "学习资料",
	router: "#study",
	index: 0,
}, {
	text: "获奖作品",
	router: "#award",
	index: 1
}, {
	text: "视频教程",
	router: "#video",
	index: 2
}, {
	text: "芯片库",
	router: "#ic",
	index: 3
}];

class ResourceItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        let sidebarArray = info.map(function(item) {
            return (
                <div key={item.index} className="side-item">
                    <Link className={ item.router==window.location.hash?'clicked':'' } to={'/resource' + item.router }>{ item.text }</Link>
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

export default ResourceItem;