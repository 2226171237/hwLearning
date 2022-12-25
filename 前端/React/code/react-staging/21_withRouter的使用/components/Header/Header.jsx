import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Header extends Component {
  backShow = () => {
    this.props.history.goBack();
}
goShow = () => {
    this.props.history.goForward();
}

  render() {
    return (
      <div className='page-header'>
        <h2>React Router Demo</h2>
        <button onClick={() => this.backShow()}>回退</button>&nbsp;&nbsp;
        <button onClick={() => this.goShow()}>前进</button>
      </div>
    )
  }
}

// withRouter加工一般组件，使其具有路由组件的API，返回一个新的组件
export default withRouter(Header);
