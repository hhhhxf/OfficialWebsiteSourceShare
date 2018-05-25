import React from 'react'
import '../style/components/SideItem.scss'
import {Link} from 'react-router'

const info = [{
    text: "意见反馈",
    router: "#opinion",
    index: 0
}, {
    text: "联系我们",
    router: "#contact",
    index: 1
}];

class AboutItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        // default route without hash
        if(window.location.hash=='') {
            window.location.hash='#opinion'
        }
        let sidebarArray = info.map(function(item) {
            return (<div key={item.index} className="side-item">
                <Link className={ item.router==window.location.hash?'clicked':'' } to={'/contact' + item.router }>{ item.text }</Link>
            </div>)
        });

        return (
            <div className="sidebar">
                {sidebarArray}
            </div>
        );
    }
}

export default AboutItem;