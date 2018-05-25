import React from "react"
import '../style/components/pageBar.scss'
import '../style/common.scss'

/*var currentPage;*/

class PageBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.prePage = this.prePage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            currentPage:1
        }
    }
    handleClick(e) {
       /*store.dispatch({type:'SELECTPAGE',pageNumber:parseInt(e.target.innerText)});*/
        var clickPage = parseInt(e.target.innerText);
        this.setState({
            currentPage:clickPage
        })
        this.props.selectPageIndex(clickPage)
    }
    prePage(e) {
        var page = this.state.currentPage -1;
        if(page>0) {
            this.setState({
                currentPage: page
            });
        }
        this.props.selectPageIndex(page)
    }
    nextPage(e) {
        var page = this.state.currentPage + 1;
        var total = this.props.totalNumber;
        if(page<=total) {
            this.setState({
                currentPage: page
            });
            this.props.selectPageIndex(page)
        }  
    }
    handleChange(e) {
        var changePage = parseInt(e.target.value);
        var total = this.props.totalNumber;
        if(changePage > 0 && changePage <= total) {
            this.setState({
                currentPage: changePage
            })
            this.props.selectPageIndex(changePage)
        }
        else {
            this.setState({
                currentPage: 1
            });
            alert("请输入正确的页码");
        }
    }

    render() {
        var numberlist=[];
        var totalNumber = this.props.totalNumber;
        /*currentPage = this.props.currentPage;*/
        var currentPage = this.state.currentPage;
        numberlist.push(<li className={ currentPage==1?'pagenumItem disable':'pagenumItem'} key='lt' onClick={this.prePage}>&lt;</li>);
        for(var i = 1;i<=totalNumber;i++){
            numberlist.push(<li className={ currentPage==i?'pagenumItem pageActive':'pagenumItem' } key={i} onClick={this.handleClick}>{i}</li>);
        }
        numberlist.push(<li className={ currentPage==totalNumber?'pagenumItem disable':'pagenumItem' } key='gt' onClick={this.nextPage}>&gt;</li>);
        return(
            <div className='pagebar'>
                <ul>
                    {numberlist}
                </ul>
                {/*<select className='pagenumItem'>
                    <option>5条/页</option>
                    <option>6条/页</option>
                </select>*/}
                <span>跳至</span><input type="text" className='pagenumItem' onChange={this.handleChange}/><span>页</span>
            </div>
        )
    }
}

export default PageBar