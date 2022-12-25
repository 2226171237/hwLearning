// 引入UI组件
import CountUI from "../../components/Count/Count";
// 引入redux 的store,不在这引入
// import store from "../../redux/store";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";


// 函数的返回值，传递给子组件的props, 传递的是状态
function mapStateProps(state) {  // state为store.getState()得到的state
    return { count: state }
}

// 函数的返回值，传递给子组件的props, 传递的是操作状态的方法
function mapDispatchToProps(dispatch) {  // 会传store.dispatch
    return {
        add: (value) => dispatch(createIncrementAction(value)),
        sub: (value) => dispatch(createDecrementAction(value)),
        asyncAdd: (value, time) => dispatch(createIncrementAsyncAction(value, time)),
    }
}

const CountContainer = connect(mapStateProps, mapDispatchToProps)(CountUI);

export default CountContainer;

