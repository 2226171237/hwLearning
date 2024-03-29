import React, { Component } from 'react'
import News from './News/News'
import Message from './Message/Message'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home内容</h3>
        <div>
          <ul className='nav nav-tabs'>
            {/* 二级路由跳转 */}
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由   二级路由注册*/}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
