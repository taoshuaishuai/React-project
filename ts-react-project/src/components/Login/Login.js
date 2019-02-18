import {Link} from 'react-router-dom';
import React,{Component} from 'react'
import './Login.css';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asynUser from '../../store/actions/asynUser';

class Login extends Component{

    state={
        username:'',
        password:''
    }

    render(){
        return (
            <div className="content">
                <div className="login-box">
                    <div className="form-box">
                        <div className="row row-input clearfix">
                            <div className="row-l fl"><i className="iconfont">&#xe608;</i></div>
                            <div className="row-r">
                                <input className="input_box" placeholder="输入手机号/邮箱/昵称" name="username" value={this.state.username} onChange={this.changeIpt.bind(this)} />
                            </div>
                        </div>
                        <div className="row row-input clearfix">
                            <div className="row-l fl"><i className="iconfont">&#xe692;</i></div>
                            <div className="row-r">
                                <input className="input_box" placeholder="输入密码" name="password" value={this.state.password} onChange={this.changeIpt.bind(this)} />
                            </div>
                        </div>
                        <div className="h20"></div>
                        <div className="row row-btn">
                            <a className="green-btn" onClick={this.props.login.bind(null,this.state.username,this.state.password,this.props.history)}>登录</a>
                        </div>
                        <div className="row row-btn">
                            <Link to="/reg" className="boder-btn">加入会员</Link>
                        </div>
                        <div className="row row-txt">
                            <a href="javascript:;" className="forget">忘记密码</a>
                        </div>
                    </div>
                    <div className="h20"></div>
                    <div className="otherway">
                        <div className="title"><span>其他登录方式</span></div>
                        <ul className="clearfix">
                            <li>
                                <a href="#" className="weibo"><i className="iconfont">&#xe60a;</i></a>
                            </li>
                            <li>
                                <a href="#" className="qq"><i className="iconfont">&#xe607;</i></a>
                            </li>
                            <li>
                                <a href="#" className="weixin"><i className="iconfont">&#xe606;</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }

    // Login(){
    //     // console.log(this.state.username,this.state.password)
    //     fetch(
    //         `/data/user.json`
    //     ).then(
    //         res=>res.json()
    //     ).then(
    //         data=>{
    //             if(data.auth){
    //                 this.props.history.push({pathname:'/user'})
    //             }else{
    //                 this.props.history.push({pathname:'/error'})
    //             }
    //         }
    //     )
    // }
}


const initMapStateToProps = state => ({
    
  });
  
const initMapDispatchToProps = dispatch => ({
    login:(username,password,history)=>dispatch(asynUser({
        url:'http://47.101.40.19:3000/login',
        username,
        password
    })).then((data)=>{
        if(data.error==0){
            alert('登陆成功！点击跳转到用户界面~');
            dispatch({type:types.CHECK_USER,payload:data.data.username});
            dispatch({type:types.CHECK_AUTH,payload:true});
            history.push('./user');
        }else if(data.error==1){
            alert('密码错误！')
        }else if(data.error==2){
            alert('用户名不存在！')
        }
    }
    )
  })
  
  
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Login);