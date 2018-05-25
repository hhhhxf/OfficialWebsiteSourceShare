import React from 'react'
import '../style/components/TextareaItem.scss'

class TextareaItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.typeIn = this.typeIn.bind(this);
    }
    typeIn(e) {
        return this.setState({
            value: e.target.value
        });
    }
    submitJudge(e) {
        if(e.target.value.length>300) {
            return false;
        } else {
            //...*****************************
        }
    }
    render(props) {
        var _this = this;
        return (
            <div className="comment-box">
                <img src="images/rfa_icon_x64.jpg" className="circle"/>
                <textarea placeholder="添加评论" onCompositionEnd={ _this.typeIn } onChange={ _this.typeIn } value={_this.state.value}></textarea>
                <span>{ _this.state.value.length }/300</span>
                <button disabled={(_this.state.value.length<=300)?false:"disabled"} className={(_this.state.value.length<=300)?"btn-able":"btn-disable"} onClick={_this.submitJudge}> 发表评论 </button>
            </div>
        )
    }
}

export default TextareaItem;