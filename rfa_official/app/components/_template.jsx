import React from "react"
import '../style/components/_template.scss'

// 模拟定义state
let state = {
    type: 'world',  // 导出组件类型
    color: 'green'    // 导出组件颜色
}

// 使用对象表达式的形式定义静态组件
const MyComponents = {
    // hello world组件
    World: function World(props) {
        return (
                <div className="hello">
                    <div className={state.color}>Hello  {state.color} world</div>
                </div>
            );
    },
    // hello apple组件
    Apple: function World(props) {
        return (
                <div className="hello">
                    <div className={state.color}>Hello {state.color} apple</div>
                </div>
            );
    }
}

// 组件渲染
class Hello extends React.Component{

    
    constructor(props){
        super(props);
        // this.props = props;
    }
    // 组件渲染逻辑
    render(props){
        if(state.type==='world'){
            return <MyComponents.World />;
        }
        if(state.type==='apple'){
            return <MyComponents.Apple />;
        }
    }
}

export default Hello