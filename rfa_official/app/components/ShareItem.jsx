import React from 'react';
import {Link} from 'react-router'
import '../style/components/SideItem.scss';

const info = [{
    text: "硬件课堂",
    router: "#hardware",
    index: 0
}, {
    text: "软件课堂",
    router: "#software",
    index: 1
}, {
    text: "多媒体技术",
    router: "#media",
    index: 2
}, {
    text: "技术问答",
    router: "#question",
    index: 3
}];

class ShareItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        if(window.location.hash=='') {
            window.location.hash='#hardware'
        }
        let sidebarArray = info.map(function(item) {
               return (
               <div key={item.index} className="side-item">
                 <Link className={ item.router==window.location.hash?'clicked':''} to={'share' + item.router}>{ item.text }</Link>
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

export default ShareItem;