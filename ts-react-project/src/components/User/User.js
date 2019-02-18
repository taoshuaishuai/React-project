import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import './User.css';
import user from '../../assets/images/user.png';
import {connect} from 'react-redux';
import * as types from '../../store/types';

class User extends Component{
    render(){
        return (
            <div className="content u-index">
            <div className="userbox">
                  <div className="userbox-1">
                      <div className="userimg"><img src={user}/></div>
                   <div className="username">{this.props.name}</div>
                  </div>
                  <div className="userbox-2">
                        <ul className="clearfix">
                            <li><a href="javascript:;" className="c000"><span>¥5201314</span><br/>钱包余额</a></li>
                            <li><span>¥0.00</span><br/>已提现余额</li>
                        </ul>
                  </div>
            </div>
            <div className="ul-list">
                   <ul>
                         <li className="tel">
                               <i className="iconfont">&#xe68e;</i>15715578598
                               <span className="fr">显示在微名片<input type="checkbox" className="switch" checked/></span>
                         </li>
                         <li>
                             <Link to="/usermsg" className="arrow-right">
                               <i className="iconfont">&#xe660;</i>个人信息
                             </Link>
                         </li>
                         <li>
                             <a href="javascript:;" className="arrow-right">
                               <i className="iconfont">&#xe625;</i>我的团队
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;" className="arrow-right">
                               <i className="iconfont">&#xe73a;</i>我的收藏
                             </a>
                         </li>
                         <li>
                             <Link to="/usercode" className="arrow-right">
                               <i className="iconfont">&#xe604;</i>一键生成二维码
                             </Link>
                         </li>
                   </ul>
               
               
            </div>
          
                 <div className="ul-list">
                   <ul>
                         <li>
                             <Link to='/login' onClick={this.props.logout.bind(null,false)} style={{textAlign:"center", color:"#999"}}>退 出
                             </Link>
                         </li>
                   </ul>
             </div>
      </div>
        )
    }
}


const initMapStateToProps = state => ({
    name:state.name
});

const initMapDispatchToProps = dispatch => ({
  logout:(bl)=>dispatch({
    type:types.CHECK_AUTH,
    payload:bl
  })
})


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(User);
