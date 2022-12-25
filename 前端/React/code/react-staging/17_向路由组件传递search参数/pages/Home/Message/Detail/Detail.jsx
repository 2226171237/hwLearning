import React, { Component } from 'react'
import qs from 'qs';

/**
 * urlendocing:
 * let obj={name:'Tome',age:18}  ====  qs.stringfy(obj)   ====>  name=Tom&age=18 
 * 
 * 逆操作：
 * str="name=Tom&age=18"   === qs.parse(str) ==>  obj={name:'Tome',age:18}
 */

const DetailData = [
    { id: '01', context: "你好，React" },
    { id: '02', context: "你好，Web" },
    { id: '03', context: "你好，JavaScript" },
]
export default class Detail extends Component {
    render() {
        // 路由传递的params参数在this.props.match.params中
        // const { id, title } = this.props.match.params;
        
        // 接收search参数
        const {search} = this.props.location;
        const {id,title}=qs.parse(search.slice(1));

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
