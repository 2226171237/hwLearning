import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
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
 * 
 * 4. Switch使用：
 *   通常情况下 path和component是一一对应的
 *   Switch可以提高路由匹配效率(单一匹配，匹配一个，则不会继续匹配)
 * 
 * 5. 路由的严格匹配和模糊匹配：
 *  默认使用的是模糊匹配，简单记：输入的路径必须包含匹配的路径，且顺序一致
 *  开启严格匹配 <Route exact={true} path='/xxx' component={Demo} />
 *  严格匹配不要随便开启，需要时在开启，有些时候开启会导致无法继续匹配二级路由
 * 
 * 6. 嵌套路由：
 *  注册子路由时要写上父路由的path为前缀
 *  路由的匹配是按照路由注册的顺序进行的
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
                <MyNavLink to="/home">Home</MyNavLink> 等于 <MyNavLink to="/home" children='Home'></MyNavLink> 即将标签内容写在children属性中。
                */}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink> {/*模糊匹配 到home  顺序不能乱 /a/home/b是不能匹配到home的， */}
              </div>
            </div>
            <div className='col-xs-6'>
              <div className='panel'>
                <div className='panel-body'>
                  {/* 注册路由   Swicth 找到一个匹配就结束，不继续往下找，不加则是匹配几个显示几个  exact是开启严格匹配*/}
                  <Switch>
                    <Route exact path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    {/* Redirect是兜底的，都匹配不上则重定向，Redirect要放在Switch的最后 */}
                    <Redirect to='/about' />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
