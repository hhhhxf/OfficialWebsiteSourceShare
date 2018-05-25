import React from 'react';
import ReactDOM from 'react-dom';
import  '../style/components/navigator.scss';
import {Link} from 'react-router';

const AboutItemInfo = [{
    text: "关于无协",
    router: "/abouts/#about",
    index: 0
}, {
    text: "现任理事",
    router: "/abouts/#acade",
    index: 1
}, {
    text: "部门介绍",
    router: "/abouts/#intro",
    index: 2
}, {
    text: "技术小组",
    router: "/abouts/#tech",
    index: 3
}];

const ActivityInfo = [{
    text: "近期活动",
    router: "/activity/#recent",
    index: 0
}, {
    text: "活动报道",
    router: "/activity/#report",
    index: 1
}, {
    text: "作品锦集",
    router: "/activity/#collection",
    index: 2
}];
// const RepaireItemInfo = [{
// 	text: "预约申请",
// 	router: "/order/#apply",
// 	index: 0
// }, {
//     text: "维修技巧",
//     router: "/order/#tips",
//     index: 1
// }];
const RepaireItemInfo = [];

const ShareItemInfo = [{
	text: "学习资料",
	router: "/resource/#study",
	index: 0,
}, {
	text: "获奖作品",
	router: "/resource/#award",
	index: 1
}, {
	text: "视频教程",
	router: "/resource/#video",
	index: 2
}, {
	text: "芯片库",
	router: "/resource/#ic",
	index: 3
}];

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state={question:'',
    				show:'home',
    				InputQuestion:'hidden'};
    	this.Question=this.Question.bind(this);
        this.navContent=this.navContent;
        this.inputQuestion=this.inputQuestion.bind(this);

	}
	Question(event) {
    	this.setState({question: event.target.value});
    }
    inputQuestion(event) {
    	if (this.state.InputQuestion!=='hidden')
    		this.setState({InputQuestion: 'hidden'});
    	else 
    		this.setState({InputQuestion: 'visible'});  
    }
    
    navContent(contentName) {
    	switch(contentName) {
    		case 'home': 
    			this.setState({
    			    show: 'home'
				});
    			break;
    		case 'introduction': 
    			this.setState({
    				show: 'introduction'
				});	 
    			break;
    		case 'updation': 
    			this.setState({
    				show: 'updation'
				});
    			break;
    		case 'repaire': 
    			this.setState({
    				show: 'repaire'
				});
				break;
			case 'resShare':
			    this.setState({
					show: 'resShare'
				});
				break;
    		default: return error;
    	}

    }    
    


	render(){
	var nav = <div className="navigation">
				
				<div className="left-logo">
					<img src="../images/logo.png"/>
				<div className="logo-charactor">
					<span><strong>无线电爱好者协会</strong></span>
					<br/>
					<span className="radio"><strong>Radio Fans</strong></span><span className="association"><strong> Association</strong></span>
				</div>
			</div>
			<div className="home-navigate">
			{/*React函数传入参数的写法 */}
    		<Link to="/" >
			<span className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-name":""} onMouseOver={() => {this.navContent("home")}}  ref="home">首页</span></Link>
   			<span className={window.location.pathname.indexOf("/abouts")!==-1 ? "nav-name":""} onMouseEnter={() => {this.navContent("introduction")}}  ref="introduction">
       			协会概况       		    	
    		</span>       		    
       		    	
    		<span className={window.location.pathname.indexOf("/activity")!==-1 ? "nav-name":""} onMouseEnter={() => {this.navContent("updation")}}  ref="updation">
       			协会动态
    		</span>
			<span className={window.location.pathname.indexOf("/resource")!==-1 ? "nav-name":""} onMouseEnter={() => {this.navContent("resShare")}}  ref="updation">
       			资源共享
    		</span>
       		{/*<span onMouseEnter={() => {this.navContent("repaire")}}  ref="repaire">
       			维修预约
    		</span>   	*/}
    		
    		</div>
			{/*<span className="login" ><Link to="#">登录</Link></span>*/}
    		 {/*<div to="#" className="search">
    			<i className="fa fa-search" aria-hidden="true" onClick={this.inputQuestion} ></i>
    		</div>     		
			<div>
		   		<input type="text" className="Input" defaultValue="请输入您要搜索的内容" onChange={this.Question} ref="myTextInput" style={{visibility:this.state.InputQuestion}}/>
			</div>*/}
			
    		</div>; 
		

		switch(this.state.show) {
			case 'home': return (
				<div className="nav-class">
					<Link to='/'></Link>
					{nav}
				</div>
				);
			case 'introduction': return (
				<div className="nav-class">
					{nav}
					<div onMouseLeave={() => {this.navContent("home")}}>
						<NavigatorAboutItem />
					</div>
				</div>
				);
			case 'updation': return (
				<div className="nav-class">
					{nav}
					<div onMouseLeave={() => {this.navContent("home")}}>
						<NavigatorActivity />
					</div>
				</div>
				);
			case 'repaire': return (
				<div className="nav-class" >
					{nav}
					<div  onMouseLeave={() => {this.navContent("home")}}>
						<NavigatorRepaire />
					</div>
				</div>
			    );
			case 'resShare': return (
				<div className="nav-class" >
					{nav}
					<div  onMouseLeave={() => {this.navContent("home")}}>
						<NavigatorShare />
					</div>
				</div>
			);
		}

	}

}


class NavigatorAboutItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if(window.location.hash=='') {
			window.location.hash='#about'
		}
		let sidebarArray = AboutItemInfo.map(function(item) {
			return  <span key={item.index}>
				<Link  className={ item.router==window.location.hash?'clicked':'' } to={ item.router }>{ item.text }</Link>
            </span>
		});
		return (
			<div className="side-bar">
				<div className="content1">
                {sidebarArray}
                </div>
            </div>			
			)
	}
}


class NavigatorActivity extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
			if(window.location.hash=='') {
			window.location.hash='#recent'
		}
		let sidebarArray = ActivityInfo.map(function(item) {
			return (<span key={item.index}>
				<Link className={ item.router==window.location.hash?'clicked':'' } to={ item.router }>{ item.text }</Link>
            </span>)	
		});
		return (
			<div className="side-bar">
				<div className="content1">
                {sidebarArray}
                </div>
            </div>				
			)
			}
	}


class NavigatorRepaire extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		if(window.location.hash=='') {
			window.location.hash='#apply'
		}
		let sidebarArray = RepaireItemInfo.map(function(item) {
			return (<span key={item.index}>
				<Link className={ item.router==window.location.hash?'clicked':'' } to={ item.router }>{ item.text }
				</Link>
            </span>)
		});
		return (
			<div className="side-bar">
				<div className="content1">
                {sidebarArray}
                </div>
            </div>
		);
	}
}

class NavigatorShare extends React.Component {
    constructor(props) {
	    super(props);
    }

    render() {

		if (window.location.hash === '') {
			window.location.hash = '#resource';
		}

		let sidebarArray = ShareItemInfo.map((item) => {
			return (
			    <span key={item.index}>
				    <Link className={ item.router==window.location.hash?'clicked':'' } to={ item.router }> { item.text } </Link>
				</span>
			);
		});

		return (
			<div className="side-bar">
				<div className="content1">
                    {sidebarArray}
                </div>
            </div>
		);
    }
}

export default Navigation
