/**
 * 改文件时用于Count服务的Reducer ，其本质是一个函数
 * Reducer会接收两个参数：之前的状态preState和要执行的动作action， 返回新的state
 */

// 初始化时 store帮我们调用
export default function countReducer(preState, action) {
    // 表示初始化
    if (preState === undefined) preState = 0;
    const { type, data } = action;
    // 根据动作类型选择如何加工数据
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }
}