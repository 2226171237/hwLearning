import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'

/**
 * 路由基本使用：
 * 1. 明确好界面的导航区和展示区
 * 2. 导航区的a标签改为Link标签
 *    <Link to="/xxxx">Demo</Link>
 * 3. 展示区写Route标签进行路径匹配
 *    <Route path='/xxx' component={Demo} />
 * 4. <App>的最外侧包裹一个<BrowserRouter>或</HashRouter>
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'><h2>React Router Demo</h2></div>
          </div>
          <div className='row'>
            <div className='col-xs-2 col-xs-offset-2'>
              <div className='list-group'>
                {/*<a className='list-group-item' href="./about.html">About</a>
              <a className='list-group-item' href="./about.html">Home</a>*/}
                {/* React中使用路由链接跳转*/}
                <Link className='list-group-item' to="/home">Home</Link>
                <Link className='list-group-item' to="/about">About</Link>
              </div>
            </div>
            <div className='col-xs-6'>
              <div className='panel'>
                <div className='panel-body'>
                  {/* 注册路由 */}
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
