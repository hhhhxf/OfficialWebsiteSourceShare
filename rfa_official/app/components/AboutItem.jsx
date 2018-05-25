import React from 'react'
import '../style/components/SideItem.scss'
import {Link} from 'react-router'

const info = [{
    text: "关于无协",
    router: "#about",
    index: 0
}, {
    text: "现任理事",
    router: "#acade",
    index: 1
}, {
    text: "部门介绍",
    router: "#intro",
    index: 2
}, {
    text: "技术小组",
    router: "#tech",
    index: 3
}];

class AboutItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        // default route without hash
        if(window.location.hash=='') {
            window.location.hash='#about'
        }
        let sidebarArray = info.map(function(item) {
            return (<div key={item.index} className="side-item">
                <Link className={ item.router==window.location.hash?'clicked':'' } to={'/abouts' + item.router }>{ item.text }</Link>
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