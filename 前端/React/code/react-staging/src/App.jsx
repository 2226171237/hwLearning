import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'       // 路由组件
import About from './pages/About/About'    // 路由组件
import Header from './components/Header/Header'  // 一般组件
import MyNavLink from './components/MyNavLink/MyNavLink'
import { Button } from 'antd';
import 'antd/dist/antd.css'
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
 *                 goForward: f goForward(n)
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
 * 
 * 7. 向路由组件传递参数
 *  (1) params方式传递参数：path参数
 *      路由链接(携带参数)：<Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
 *      注册路由(声明参数): <Route path="/home/message/detail/:id/:title" component={Detail} />
 *      组件接收参数：const { id, title } = this.props.match.params;
 *  (2) search方式传递参数：query参数
 *      路由链接(携带参数)：<Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
 *      注册路由(无须声明，正常注册即可): <Route path="/home/message/detail" component={Detail} />
 *      组件接收参数：const {search} = this.props.location;  const {id,title}=qs.parse(search.slice(1));
 *  (3) state方式传递参数：此state非组件里的state  参数在地址栏里隐藏
 *      路由链接(携带参数)：<Link to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>
 *      注册路由(无须声明，正常注册即可): <Route path="/home/message/detail" component={Detail} />
 *      组件接收参数：const {id,title}=this.props.location.state;
 *      备注：刷新数据也不丢失
 * 
 * 8. history的push和replace模式：
 *      默认时push模式，即入栈，replace开启：
 *      <Link replace={true} to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>&nbsp;&nbsp;
 *      则会替换栈顶的元素，没有浏览痕迹。
 * 9. BrowserRouter和HashRouter的区别：
 *      1. 底层原理不一样：
 *          BrowserRouter使用的时H5的history Api，不兼容IE9及以下版本
 *          HashRouter使用的时URL哈希值
 *      2. url表现形式不一样：
 *          BrowserRouter的路径中没有#，例如localhost:3000/demo/test  以URL路径的形式，会传递到后端
 *          HashRouter的路径包含#,例如：localhost:3000/#/demo/test   以锚点的形式，不会传递到后端
 *      3. 刷新后对路由state参数的影响：
 *          BrowserRouter没有任何影响，因为state保存在history中
 *          HashRouter刷新会导致路由state参数的丢失。
 *      4. 备注：HashRouter可以解决一些路径错误相关的问题
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}
