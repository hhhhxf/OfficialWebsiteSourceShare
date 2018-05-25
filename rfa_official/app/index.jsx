'use strict'
// 在入口文件引入需要依赖的npm模块
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {Router, Redirect, Route, IndexRoute, browserHistory } from 'react-router'

// 引入公共样式
import './style/common.scss'

// 引入组件
import Navigation from './components/Navigator.jsx'
import HomeContainer from './containers/HomeContainer.jsx'
import AboutContainer from './containers/AboutContainer.jsx'
import ActivityContainer from './containers/ActivityContainer.jsx'
import ShareContainer from './containers/ShareContainer.jsx'
import OrderContainer from './containers/OrderContainer.jsx'
import ContactContainer from './containers/ContactContainer.jsx'
import DetailContainer from './containers/DetailContainer.jsx'
import ResourceContainer from './containers/ResourceContainer.jsx'

import Footer from "./components/footer.jsx"
// import TodoList from './containers/TodoList.jsx'
// import Hello from "./components/_template.jsx"      


class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        	<div id="app">
                <Navigation />
                {this.props.children}
                <Footer/>
       	 	</div>
        )
        
    }
}

ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/abouts" component={AboutContainer} />
            <Route path="/activity" component={ActivityContainer} />
            <Route path="/share" component={ShareContainer} />
            <Route path="/order" component={OrderContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/detail" component={DetailContainer} />
            <Route path="/resource" component={ResourceContainer} />
            <Route path="/*" component={HomeContainer} />
        </Route>
    </Router>),
    document.getElementById("root")
)
