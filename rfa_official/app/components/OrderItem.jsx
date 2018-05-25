import React from 'react'
import '../style/components/SideItem.scss'
import {Link} from 'react-router'

const info = [{
    text: "预约申请",
    router: "#apply",
    index: 0
}, {
    text: "维修技巧",
    router: "#tips",
    index: 1
}];

class OrderItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(props){
        if(window.location.hash=='') {
            window.location.hash='#apply'
        }
        let sidebarArray = info.map(function(item) {
               return (<div key={item.index} className="side-item">
                    <Link className={ item.router==window.location.hash?'clicked':'' } to={'order'+ item.router }>{ item.text }</Link>
                </div>)
        });

        return (
            <div className="sidebar">
                {sidebarArray}
            </div>
        );
    }
}

export default OrderItem;