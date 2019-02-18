import React from 'react'
import {Link} from 'react-router-dom';
import './Column2.css';
const Column2 = ({column2}) => (
            <div className="column column-1 card-list">
                <div className="title">
                    <span className="titletext fl"><i className="iconfont">&#xe69a;</i>美言推荐</span>
                    <Link to="/meilist" className="more fr">更多<i className="iconfont">&#xe65f;</i></Link>
                </div>
                <div className="con-list">
                    <ul className="clearfix">
                    {
                            column2.map((item,index)=>(
                                <li key={item.id}>
                                    <div className="photo-card">
                                    <Link to={{pathname:'/detail/'+item.id}} className="img"><img src={item.src} /></Link>
                                        <p className="txt"><Link to={{pathname:'/detail/'+item.id}}>{item.title}</Link></p>
                                        <div className="info clearfix">
                                            <span className="author"><img src={item.auth_face} />{item.auth}</span>
                                            <span className="zan"><i className="iconfont">&#xe600;</i>{item.like}</span>
                                            <span className="collect"><i className="iconfont">&#xe605;</i>{item.collect}</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
)

export default Column2;