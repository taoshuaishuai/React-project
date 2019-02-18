import {Link} from 'react-router-dom';
import React,{Component} from 'react'
import './Reg.css';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asynUser from '../../store/actions/asynUser';

class Reg extends Component{
    state={
        username:'',
        password:''
    }

    render(){
        return (
            <div className="content">
            <div className="register-box">
                 <div className="form-box">
                     <div className="row row-input clearfix">
                         <div className="row-l fl"><i className="iconfont">&#xe64f;</i></div>
                         <div className="row-r">
                             <input className="input_box" placeholder="输入手机号/邮箱/昵称" name="username" value={this.state.username} onChange={this.changeIpt.bind(this)}/>
                         </div>
                     </div>
                     <div className="row row-input clearfix">
                         <div className="row-l fl"><i className="iconfont">&#xe692;</i></div>
                         <div className="row-r">
                             <input className="input_box" placeholder="输入密码" name="password" value={this.state.password} onChange={this.changeIpt.bind(this)}/>
                         </div>
                     </div>
                     <div className="row row-input clearfix">
                         <div className="row-l fl"><i className="iconfont">&#xe692;</i></div>
                         <div className="row-r">
                             <input className="input_box" placeholder="再次输入密码" value={this.state.password}/>
                         </div>
                     </div>
                     <div className="row row-input clearfix">
                         <div className="row-l fl"><i className="iconfont">&#xe608;</i></div>
                         <div className="row-r">
                             <input className="input_box" placeholder="输入昵称"/>
                         </div>
                     </div><div className="row row-input clearfix">
                         <div className="row-l fl"><i className="iconfont">&#xe6a8;</i></div>
                         <div className="row-r">
                             <span>性别</span>
                             <label><input className="btn-radio" type="radio" name="radio1" checked/>男</label>
                         <label><input className="btn-radio" type="radio" name="radio1"/>女</label>
                         </div>
                     </div><div className="row row-input clearfix">
                         <div className="row-l fl"><i className="iconfont">&#xe60f;</i></div>
                         <div className="row-r">
                             <span>支付方式</span>
                             <label style={{color: "#24a82e"}}><input className="btn-radio" type="radio" name="radio2" checked/>微信</label>
                         <label style={{color: "#2d95de"}}><input className="btn-radio" type="radio" name="radio2"/>银行卡</label>
                         </div>
                     </div>
                     <div className="row row-txt">
                         <p><input className="checkbox" checked type="checkbox" name="checkbox"/>已阅读并同意<a href="user_xieyi.html">《Taylor Swift协议》</a></p>
                     </div>
                     <div className="row row-btn">
                         <a className="green-btn" onClick={this.props.reg.bind(null,this.state.username,this.state.password,this.props.history)}>确定</a>
                     </div>
                 </div>
            </div>
          <div className="register-table">
              <table>
                  <tr><th>非会员/会员权限对比</th><th>非会员</th><th>会员</th></tr>
                  <tr>
                      <td className="td-1">无限使用<span>贴贴</span>功能</td>
                      <td className="td-2">仅限浏览</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">无限使用<span>美拍</span>功能</td>
                      <td className="td-2">仅限浏览</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">无限使用<span>美言</span>功能</td>
                      <td className="td-2">仅限浏览</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">无限使用<span>美视</span>功能</td>
                      <td className="td-2">仅限浏览购买</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">无限使用<span>美视</span>功能</td>
                      <td className="td-2">仅限浏览购买</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">一键生成<span>推广</span>二维码</td>
                      <td className="td-2">×</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">分销系统帮你<span>赚钱</span></td>
                      <td className="td-2">×</td>
                      <td className="td-3">无限使用</td>
                  </tr>
                  <tr>
                      <td className="td-1">社区<span>促销奖励</span>活动</td>
                      <td className="td-2">×</td>
                      <td className="td-3">√</td>
                  </tr>
                  <tr>
                      <td className="td-1"><span>会费</span></td>
                      <td className="td-2">免费</td>
                      <td className="td-3">50元一次性</td>
                  </tr>
              </table>
          </div>
       </div>
        )
    }

    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
}

const initMapStateToProps = state => ({
    
});

const initMapDispatchToProps = dispatch => ({
  reg:(username,password,history)=>dispatch(asynUser({
      url:'http://47.101.40.19:3000/reg',
      username,
      password
  })).then((data)=>{
      if(data.error==0){
          alert('恭喜您注册成功！');
          history.push('./login');
      }else if(data.error==1){
          alert('该用户名已被他人抢先注册！')
      }
  }
  )
})


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Reg);