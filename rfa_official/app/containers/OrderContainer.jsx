import React from 'react';
import SideItem from '../components/OrderItem.jsx';
import '../style/containers/WhiteContainer.scss';

import RepairApply from "../components/repairApply.jsx"



class OrderContainer extends React.Component {
    constructor(props) {
        super(props);
        let {info} = this.props;
    }
    
    render(props) {

        return (
            <div className="white-container">
                <SideItem />

                <div className="content">
                    {(window.location.hash === '#apply') ? <RepairApply/> : null}
                </div>
                
                <div className="paging">
                    {/* 分页目录 */}
                </div>
            </div>
        );
    }
}

export default OrderContainer;