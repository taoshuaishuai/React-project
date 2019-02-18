import React from 'react'
import {Link} from 'react-router-dom';
import './Column4.css';
const Column4 = ({column4}) => (
            <div className="column column-4 imgtxt-list">
                <div className="title">
                    <span className="titletext fl"><i className="iconfont">&#xe603;</i>贴贴精选</span>
                    <Link to="/meilist" className="more fr">更多<i className="iconfont">&#xe65f;</i></Link>
                </div>
                <div className="con-list">
                    <ul className="clearfix">
                        {
                            column4.map((item,index)=>(
                                <li key={item.id}>
                                    <div className="li-box clearfix">
                                    <Link to={{pathname:'/detail/'+item.id}} className="img fl"><img src={item.src} /></Link>
                                        <div className="txt-box">
                                            <p className="txt"><Link to={{pathname:'/detail/'+item.id}}>{item.title}</Link></p>
                                            <div className="info clearfix">
                                                <span className="zan"><i className="iconfont">&#xe600;</i>{item.like}人点赞</span>
                                                <span className="collect"><i className="iconfont">&#xe605;</i>{item.collect}人收藏</span>
                                                <span className="author"><img src={item.auth_face} />{item.auth}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        )
export default Column4;