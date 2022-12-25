import React, { Component } from 'react'
// 引入store
import store from '../../redux/store';
import { createIncrementAction, createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action';

export default class extends Component {

    increment = () => {
        const { value } = this.selectNumber
        // 通知redux进行加
        store.dispatch(createIncrementAction(value * 1))
    }

    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState();
        if (count % 2 === 1) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAsyncAction(value * 1,500));
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数时加</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;&nbsp;
            </div>
        )
    }
}
