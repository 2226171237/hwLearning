import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Detail from './Detail/Detail';

export default class Message extends Component {
    state = {
        messages: [
            { id: '01', title: 'message1' },
            { id: '02', title: 'message2' },
            { id: '03', title: 'message3' },
        ]
    }
    pushShow = (id, title) => {
        // params参数方式：
        this.props.history.push(`/home/message/detail/${id}/${title}`);

        // search参数方式
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

        // state参数方式
        // this.props.history.push('/home/message/detail',{id,state});
    }
    replaceShow = (id, title) => {
        // params参数方式：
        this.props.history.replace(`/home/message/detail/${id}/${title}`);

        // search参数方式
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

        // state参数方式
        // this.props.history.replace('/home/message/detail',{id,state});
    }

    backShow = () => {
        this.props.history.goBack();
    }
    goShow = () => {
        this.props.history.goForward();
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                <ul>
                    {
                        messages.map(msg => {
                            return <li key={msg.id}>
                                {/* 向路由组件传递params参数 */}
                                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
                                <button onClick={() => this.pushShow(msg.id, msg.title)}>push</button>&nbsp;&nbsp;
                                <button onClick={() => this.replaceShow(msg.id, msg.title)}>replace</button>&nbsp;&nbsp;

                                {/* 向路由组件传递search参数 */}
                                {/* 向<Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;*/}

                                {/* 向路由组件传递state参数 to传递一个对象 */}
                                {/* <Link replace={true} to={{ pathname: '/home/message/detail', state: { id: msg.id, title: msg.title } }}>{msg.title}</Link>&nbsp;&nbsp; */}
                            </li>
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                <Route path="/home/message/detail/:id/:title" component={Detail} />

                {/* search参数无须声明接收，正常注册即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* sstate参数无须声明接收，正常注册即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                <button onClick={() => this.backShow()}>回退</button>&nbsp;&nbsp;
                <button onClick={() => this.goShow()}>前进</button>
            </div>
        )
    }
}
