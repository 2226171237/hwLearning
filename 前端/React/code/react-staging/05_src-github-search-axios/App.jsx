import React, { Component } from 'react'
import './App.css'
import Search from './components/Search/Search'
import List from './components/List/List'

export default class App extends Component {

  state = {
    users: [],
    isFirst:true,
    isLoading:false,
    errorMsg:""
  }

  updateApp = (valueObj) =>{
      this.setState(valueObj)
  }

  render() {
    return (
      <div className='container'>
        <Search updateApp={this.updateApp}/>
        <List {...this.state} />
      </div>
    )
  }
}
