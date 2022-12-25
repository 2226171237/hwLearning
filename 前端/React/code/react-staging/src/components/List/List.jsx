import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateDone: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const { todos, updateDone, deleteTodo } = this.props;
        return (
            <ul className='todo-list'>
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateDone={updateDone} deleteTodo={deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
