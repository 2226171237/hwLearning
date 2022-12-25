import React, { Component } from 'react'
import { nanoid } from 'nanoid';

import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

import './App.css';


/**
 * 动态初始化列表，如何确定将数据放在哪个组件的state中？
 *      - 某个组件使用：放在其自身的state中；
 *      - 某些组件使用：放在他们共同的父组件state中（状态提升）
 * 关于父子通信：
 *      - 父组件给子组件传递数据：通过props
 *      - 子组件给父组件传递数据：通过props传递，要求父提前给子传递一个函数
 * 状态在哪，操作状态的方法就在哪。
 */
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: false },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '学习', done: false }
    ]
  }

  addTodo = (name) => {
    const { todos } = this.state;
    const newTodos = [{ id: nanoid(), name: name, done: false }, ...todos];
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodos,
    })
  }

  updateDone = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      }
      return todo;
    })
    this.setState({
      todos: newTodos
    })
  }

  checkAllTodo = (checked) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: checked }
    })
    this.setState({
      todos: newTodos
    })
  }

  deleteAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className='todo-container'>
        <div className='todo-warp'>
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateDone={this.updateDone} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllDone={this.deleteAllDone} />
        </div>
      </div>
    )
  }
}
