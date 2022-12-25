1. 求和案例 Redux精简版：
（1）去除Count组件的自身状态
（2）src下建立：
    -src
        -redux
            -store.js
            -count_reducer.js
（3）store.js
    1) 引入redux中的createStore函数，创建一个Store
    2) createStore调用时要传入一个为其服务的reducer
    3) 记得暴露store
（4）count_reducer.js
    1) reducer的本质时一个函数，接收preState,action,返回更新的state
    2) reducer有两个作用：初始化状态和加工状态
    3) reducer第一次被调用时，是store自动触发的，传递的preState=undefine
（5）在index.js中检测store中状态的变化，一旦变化则重新渲染<App/>
    备注：redux只负责管理状态，至于状态的改变驱动着页面的展示要自己写
2. 异步action:
    1. 明确：延迟的动作不想交给组件自身，向交给action
    2. 具体编码：
        1. 安装支持异步action的中间件 npm install redux-thunk ， 在store中应用thunk:
        ```js
         import thunk from "redux-thunk";
         export default createStore(countReducer, applyMiddleware(thunk));
         ```
        2. 创建异步action, action是function 不是对象，在function里写异步任务
        3. 异步任务有结果后，分发一个同步的action去做真实的操作     