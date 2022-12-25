import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class Search extends Component {

    search = () => {
        // 1. 获取用户的输入
        const value = this.searchInput.value;
        // this.props.updateApp({ isFirst: false, isLoading: true });
        PubSub.publish("search", { isFirst: false, isLoading: true });
        // 2. 发送网络请求
        /*
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                // this.props.updateApp({ users: response.data.items, isLoading: false })
                PubSub.publish("search", { users: response.data.items, isLoading: false })
            },
            error => {
                // this.props.updateApp({ errorMsg: JSON.stringify(error.message), isLoading: false })
                PubSub.publish("search", { errorMsg: JSON.stringify(error.message), isLoading: false })
            }
        )*/

        fetch(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                PubSub.publish("search", { users: data.items, isLoading: false })
            }
        ).catch(error => {
            PubSub.publish("search", { errorMsg: JSON.stringify(error.message), isLoading: false })
        })
    }

    render() {
        return (
            <section className='jumbotron'>
                <h3 className='jumbotron-heading'>搜索Github用户</h3>
                <div>
                    <input ref={c => this.searchInput = c} type="text" placeholder='输入关键字点击搜索' />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
