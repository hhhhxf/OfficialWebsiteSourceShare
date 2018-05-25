import React from "react"
import '../style/components/footer.scss'
import { Link } from 'react-router'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className="footer">
                <div>
                    <div className="weixin">
                        <div><img src="./images/small-R.jpg"/></div>  
                    </div>
                    <div className="weibo">
                        <div><img src="./images/wuxie_weibo.png"/></div>  
                    </div>
                    <span><Link to="/contact#opinion">意见反馈</Link></span>
                    <span><Link to="/contact#contact">联系我们</Link></span>  
                    <div  className="line"></div>
                    <span className="copyRight">Copyright &copy;2017 无线电爱好者协会 All Rights Reserved.</span>
                </div>
            </footer>
        )
    }
}

export default Footer;