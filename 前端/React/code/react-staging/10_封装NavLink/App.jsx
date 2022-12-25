import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home/Home'       // 路由组件
import About from './pages/About/About'    // 路由组件
import Header from './components/Header/Header'  // 一般组件
import MyNavLink from './components/MyNavLink/MyNavLink'
/**
 * 路由基本使用：
 * 1. 明确好界面的导航区和展示区
 * 2. 导航区的a标签改为Link标签
 *    <Link to="/xxxx">Demo</Link>
 * 3. 展示区写Route标签进行路径匹配
 *    <Route path='/xxx' component={Demo} />
 * 4. <App>的最外侧包裹一个<BrowserRouter>或</HashRouter>
 * 
 * 
 * 路由组件与一般组件：
 * 1. 写法不同：
 *    一般组件：<Demo/>
 *    路由组件：<Route path='/xxxx' component={Demo} />
 * 2. 存放位置不同：
 *    一般组件：components
 *    路由组件：pages
 * 3. 接受的props不同：
 *    一般组件：传入的props是啥就是啥
 *    路由组件：无法手动传入，会接收到固定的三个属性：
 *              history:
 *                 go: f go(n)
 *                 goBack: f goBack()
 *                 goForwrd: f goForwrd(n)
 *                 push: f push(path, state)
 *                 replace: f replace(path,state)
 *              location:
 *                 pathname: "/about"
 *                 search:""
 *                 state:undefined
 *              match:
 *                 params: {}
 *                 path: "/about"
 *                 url: "/about"
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <Header />
          </div>
          <div className='row'>
            <div className='col-xs-2 col-xs-offset-2'>
              <div className='list-group'>
                {/*<a className='list-group-item' href="./about.html">About</a>
              <a className='list-group-item' href="./about.html">Home</a>*/}
                {/* React中使用路由链接跳转
                <MyNavLink to="/home">Home</MyNavLink> 等于 <MyNavLink to="/home" children='Home'></MyNavLink> 即将标签内容写在children属性中
                */}
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/about">About</MyNavLink>
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
