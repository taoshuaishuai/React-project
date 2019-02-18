import React,{Component} from 'react'
import './Usermsg.css';
import user from '../../assets/images/user_mini.png';
import {connect} from 'react-redux';

class Usermsg extends Component{
    render(){
        return (
            <div className="content">
            <div className="ul-list">
                 <ul>
                     <li className="pic">
                         <a>头像
                            <span className="fr"><img src={user}/></span>
                             </a>
                     </li>
                 </ul>
            </div>
            <div className="ul-list">
                   <ul>
                         <li>
                             <a href="#" className="arrow-right">昵称
                       <span className="fr">{this.props.name}</span>
                             </a>
                         </li>
                         <li>
                             <a href="#" className="arrow-right">性别
                       <span className="fr">男</span>
                             </a>
                         </li>
                         <li>
                             <a href="#" className="arrow-right">电话
                        <span className="fr">15715578598</span>
                             </a>
                         </li>
                         <li>
                             <a href="#" className="arrow-right">邮箱
                       <span className="fr">2528690066@qq.com</span>
                             </a>
                         </li>
                   </ul>
            </div>
            <div className="ul-list">
                   <ul>
                         <li>
                             <a className="arrow-right">个性签名
                                 <span className="fr">修改</span>
                             </a>
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
 
})


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Usermsg);