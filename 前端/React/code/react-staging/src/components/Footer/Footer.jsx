import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    handleAllChecked = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    deleteAllDone = () => {
        if (window.confirm("确认清除所有已完成？")) {
            this.props.deleteAllDone();
        }
    }

    render() {
        const { todos } = this.props;
        const total = todos.length;
        const countDones = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0);
        return (
            <div className='todo-footer'>
                <label >
                    <input type="checkbox" checked={countDones === total && total !== 0} onChange={(event) => this.handleAllChecked(event)} />
                    <span>
                        <span>已完成{countDones}</span>/全部{total}
                    </span>
                    <button onClick={this.deleteAllDone} className='btn btn-danger'>清除已完成任务</button>
                </label>
            </div>
        )
    }
}
