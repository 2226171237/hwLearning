import React, { Component } from 'react'

export default class extends Component {

    state = {
        sum: 0,
    }
    increment = () => {
        const { value } = this.selectNumber
        const newSum = value * 1 + this.state.sum;
        this.setState({
            sum: newSum
        })
    }

    decrement = () => {
        const { value } = this.selectNumber
        const newSum = this.state.sum - value * 1;
        this.setState({
            sum: newSum
        })
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.state.sum % 2 === 1) {
            const newSum = value * 1 + this.state.sum;
            this.setState({
                sum: newSum
            })
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        const newSum = value * 1 + this.state.sum;
        setTimeout(() => {
            this.setState({
                sum: newSum
            })
        }, 500);
    }

    render() {
        const { sum } = this.state;
        return (
            <div>
                <h1>当前求和为：{sum}</h1>
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
