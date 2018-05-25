import React from 'react';
import SideItem from '../components/ResourceItem.jsx';
import ResourceStudy from '../components/ResourceStudy.jsx';
import '../style/containers/WhiteContainer.scss';

import { hostname } from "../config/env.js";


class ResourceContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        if(window.location.hash=='') {
            window.location.hash='#study'
        }
        if(location.hash ==='#study') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                         {/* Component */}
                         <ResourceStudy />
                    </div>
                </div>
            );
        }else if(location.hash === '#award') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                         {/* Component */}
                    </div>
                </div>
            )
        }else if(location.hash === '#video') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                         {/* Component */}
                    </div>
                </div>
            )
        }else if(location.hash === '#ic') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        {/* Component */}
                    </div>
                </div>
            )
        }else {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                    </div>
                </div>
            )
        }
        
    }
}

export default ResourceContainer;