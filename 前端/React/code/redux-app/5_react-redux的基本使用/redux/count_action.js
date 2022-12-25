/**
 * 该文件专门为Count组件生成action
 */

import { DECREMENT, INCREMENT } from "./constant"

export function createIncrementAction(data) {
    return { type: INCREMENT, data: data }
}

// 异步action : action是对象
export function createDecrementAction(data) {
    return { type: DECREMENT, data: data }
}

// 异步action : action是函数， 异步action中一般都会调用同步action
export function createIncrementAsyncAction(data, waitTime) {
    return (dispatch) => {
        setTimeout(() => {
            // store.dispatch(createIncrementAction(data));
            dispatch(createIncrementAction(data));
        }, waitTime);
    }
}