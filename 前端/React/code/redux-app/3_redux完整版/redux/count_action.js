/**
 * 该文件专门为Count组件生成action
 */

import { DECREMENT, INCREMENT } from "./constant"

 export function createIncrementAction(data) {
    return { type: INCREMENT, data: data }
}

export function createDecrementAction(data) {
    return { type: DECREMENT, data: data }
}