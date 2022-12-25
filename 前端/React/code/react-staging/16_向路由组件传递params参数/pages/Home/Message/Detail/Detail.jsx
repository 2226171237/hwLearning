import React, { Component } from 'react'


const DetailData = [
    { id: '01', context: "你好，React" },
    { id: '02', context: "你好，Web" },
    { id: '03', context: "你好，JavaScript" },
]
export default class Detail extends Component {
    render() {
        // 路由传递的params参数在this.props.match.params中
        const { id, title } = this.props.match.params;
        const { context } = DetailData.find(obj => {
            return obj.id === id;
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Context:{context}</li>
            </ul>
        )
    }
}
