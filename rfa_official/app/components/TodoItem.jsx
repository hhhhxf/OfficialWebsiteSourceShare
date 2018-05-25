import React from "react";
import '../style/components/TodoItem.scss';

// 模拟定义state
let state = {
    isDone: true,  // 导出组件类型
    time: "12:00",
    thing: "准备吃午饭",
}


// 使用对象表达式的形式定义静态组件
const MyComponents = {
    // 未完成组件
    todo: function todo(props) {
        return (
                <div className="TodoItem">
                    <p>{state.time}</p>
                    <p>{state.thing}</p>
                    <button className="todo">未完成</button>
                </div>
            );
    },
    // 已完成组件
    done: function done(props) {
        return (
                <div className="TodoItem">
                    <p>{state.time}</p>
                    <p>{state.thing}</p>
                    <button className="done">完成</button>
                </div>
            );
    }
}

// 组件渲染
class TodoItem extends React.Component{

    constructor(props){
        super(props);
        let { state } = this.props;   // 从父组件获取 state
    }
    // 组件渲染逻辑
    render(props){


        if(state.isDone){
            return <MyComponents.done />;
        }
        if(!state.isDone){
            return <MyComponents.todo />;
        }
    }
}

export default TodoItem;