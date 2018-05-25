import React from 'react';
import SideItem from '../components/ContactItem.jsx';
import Opinion from '../components/opinion.jsx';
import Contact from '../components/contact.jsx';
import '../style/containers/WhiteContainer.scss';

import { hostname } from "../config/env.js";


class ContactContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        
        if(location.hash ==='#opinion') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        <Opinion />
                    </div>
                </div>
            );
        }else if(location.hash === '#contact') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        <Contact />
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

export default ContactContainer;