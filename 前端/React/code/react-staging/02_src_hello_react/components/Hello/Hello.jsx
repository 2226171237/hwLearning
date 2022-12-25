import React,{Component} from "react";
// .css 以module结尾，则可以使用变量接住，防止css冲突
import hello from './Hello.module.css';

export default class Hello extends Component{

    render(){
        return (
          <h1 className={hello.title}>
            Hello React
          </h1>  
        );
    }
}