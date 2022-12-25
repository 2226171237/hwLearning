import React, { Component } from 'react'
import './List.css'
import PubSub from 'pubsub-js';

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        errorMsg: ""
    }

    componentDidMount() {
        this.token = PubSub.subscribe("search", (msg, objData) => {
            this.setState(objData)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }

    render() {
        const { users, isFirst, isLoading, errorMsg } = this.state;
        return (
            <div className='row'>
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>正在搜索。。。。。。</h2> :
                            errorMsg ? <h2>{errorMsg}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a href={userObj.html_url} target="_blank" rel='noreferrer'>
                                                <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
