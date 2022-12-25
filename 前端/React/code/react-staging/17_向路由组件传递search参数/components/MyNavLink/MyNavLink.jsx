import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        // 标签的内容会放在props的children中，可以作为标签属性，不用直接写
        // <NavLink activeClassName='active' className='list-group-item' {...this.props}>{this.props.children}</NavLink>
        return (
                <NavLink activeClassName='active' className='list-group-item' {...this.props}/>
        )
    }
}
