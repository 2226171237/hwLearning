import React, { Component } from 'react'
import MyNavLink from '../../../components/MyNavLink/MyNavLink'

export default class Message extends Component {
    state = {
        messages: [
            { id: '01', title: 'message1' },
            { id: '02', title: 'message2' },
            { id: '03', title: 'message3' },
        ]
    }

    render() {
        const { messages } = this.state;
        return (
            <div>
                <ul>
                    {
                        messages.map(msg => {
                            return <li key={msg.id}>
                                <MyNavLink to={`/home/message/${msg.id}`}>{msg.title}</MyNavLink>&nbsp;&nbsp;
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
