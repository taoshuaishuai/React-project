import React,{Component} from 'react';
import './Header.css'
class Header extends Component{
    render(){
        return (
            <div id="header">
                <a href="javascript:window.history.go(-1);" className="iconfont fl">&#xe63f;</a>
                <div className="title">Taylor Swift</div>
                <a href="#" className="iconfont fr">&#xe6a0;</a>
            </div>
        )
    }
};

export default Header