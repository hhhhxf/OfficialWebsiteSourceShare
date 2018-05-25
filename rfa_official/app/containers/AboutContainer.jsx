import React from 'react';
import SideItem from '../components/AboutItem.jsx';
import AboutRfa from "../components/AboutRfa.jsx";
import CurrentDirsItem from '../components/CurrentDirsItem.jsx';
import Domistry from '../components/domistry.jsx';
import Technology from '../components/technology.jsx';
import '../style/containers/WhiteContainer.scss';

import { hostname } from "../config/env.js";


class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        
        if(location.hash ==='#about') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        <AboutRfa />
                    </div>
                </div>
            );
        }else if(location.hash === '#acade') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        <CurrentDirsItem />
                    </div>
                </div>
            )
        }else if(location.hash === '#intro') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        <Domistry />
                    </div>
                </div>
            )
        }else if(location.hash === '#tech') {
            return (
                <div className="white-container">
                    <SideItem />
                    <div className="content">
                        <Technology />
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

export default AboutContainer;