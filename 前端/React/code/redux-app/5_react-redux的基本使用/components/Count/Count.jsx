import React, { Component } from 'react'

export default class extends Component {

    increment = () => {
        const { value } = this.selectNumber
        this.props.add(value*1);
    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.sub(value*1);
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const {count} = this.props;
        if (count % 2 === 1) {
            this.props.add(value*1);
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.asyncAdd(value*1,500);
    }

    render() {
        const {count} = this.props;
        return (
            <div>
                <h1>当前求和为：{count}</h1>
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
