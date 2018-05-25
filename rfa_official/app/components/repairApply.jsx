import React from "react"
import '../style/components/repairApply.scss'
import '../style/common.scss'

class RepairApply extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let phoneInput = [];
        for(let i = 0;i<3;i++){
            phoneInput[i]=(
                <input type="text" className={"tel"+ (i===2?" adjustTel":"")} onKeyUp={this.keyUp} key={'phone'+ i} maxLength="4" pattern="\d+"/>
            )
        }
        return(
            <div className="repairApply">
                <div className="state-bar">
                    <div className="pass-state">1</div><span>申请</span><hr/>
                    <div>2</div><span>审核</span><hr/>
                    <div>3</div><span>完成</span>
                </div>
                <form>
                    <label>姓名：</label><input type="text" placeholder="请输入" className="adjustName"/><br/>
                    <label>电话号码：</label>{phoneInput}<br/>
                    <label>宿舍地址：</label>
                        <select>
                            <option style={{display:"none"}}>请选择</option>
                            <option>北三</option>
                            <option>北四</option>
                        </select>
                        <input type="text" placeholder="请输入" className="address"/><br/>
                    <label>电器名称：</label><input type="text" placeholder="请输入"/><br/>
                    <label>问题描述：</label><textarea placeholder="请输入"></textarea><br/>
                    <input type="submit" value="提交申请"/>
                </form>
            </div>
        )
    }
}

export default RepairApply