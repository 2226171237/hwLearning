import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Item.css';

export default class Item extends Component {

    state = { mouse: false }

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        };
    }

    handleCheck = (id) => {
        return (event) => {
            const { checked } = event.target;
            this.props.updateDone(id, checked);
        }
    }

    handleDelete = (id) => {
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id);
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className='btn btn-danger'
                    style={{ display: mouse ? 'block' : 'none' }}
                    onClick={() => this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}
