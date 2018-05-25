import React from "react"
import '../style/components/QuestionModel.scss'
var questionMsg = {
    title:'',
    content:''
}
class QuestionModel extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.titleChange = this.titleChange.bind(this);
    }
    
    submit(event){
        if(questionMsg.title.length<5){
            alert("标题不得少于5个字符");
        }
        if(questionMsg.content.length<5){
            alert("内容不得少于5个字符");
        }
        if(questionMsg.title.length>=5&&questionMsg.content.length>=5){
            console.log(questionMsg.title);
            console.log(questionMsg.content);
            alert("提交成功！");
            this.props.handleShow();
        }
    }

    titleChange(event){
        questionMsg.title = event.target.value;
    }

    contentChange(event){
        questionMsg.content = event.target.value;
    }

    render() {
        const contentHeight = this.props.contentHeight;
        console.log(contentHeight);
        const style = {
            height: contentHeight + 385 + 'px'
        }
        console.log(style.height);
        return (
            <div className="question-model" style={style}>
                <div className="question-content">
                    <div className="question-head">
                        <h5>我要提问</h5>
                        <i className="fa fa-times close" onClick={this.props.handleShow}></i>
                    </div>
                    <input type="text" placeholder="请输入问题标题" onChange={this.titleChange}/><br/>
                    <span>标题不能少于5个字符</span><br/>
                    <textarea placeholder="请输入问题内容" onChange={this.contentChange}></textarea><br/>
                    <span>内容不能少于5个字符</span>
                    <div className="question-footer">
                        <input type="submit" value="提交" onClick={this.submit}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionModel;