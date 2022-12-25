/**
 * 该文件专门用于暴露store， 整个应用只要一个store
 */

// 引入  createStore，专门用来创建redux中的核心store对象
import { legacy_createStore as createStore, applyMiddleware } from "redux";
// 引入为Count组件服务的reducer对象
import countReducer from './count_reducer';

// 引入 thunk 用于支持异步action
import thunk from "redux-thunk";

// 应用中间件
export default createStore(countReducer, applyMiddleware(thunk));