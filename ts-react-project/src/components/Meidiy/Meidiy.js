import React,{Component} from 'react'
import './Meidiy.css';
import {Link} from 'react-router-dom';
class Meidiy extends Component{
    render(){
        return (
            <div className="content meidiy">
            <ul>
                   <li>
                          <Link to='/meilist'>
                              <div className="item item-1 clearfix">
                                     <div className="pic fl"><i className="iconfont">&#xe62e;</i></div>
                                     <div className="txt-box">
                                           <h2>美拍</h2>
                                           <p>自拍/摄影/风景/视角</p>
                                     </div>
                              </div>
                          </Link>
                   </li>
                   <li>
                   <Link to='/meilist'>
                       <div className="item item-2 clearfix">
                           <div className="pic fl"><i className="iconfont">&#xe69a;</i></div>
                           <div className="txt-box">
                               <h2>美言</h2>
                               <p>对白/思想/歌词/心情</p>
                           </div>
                       </div>
                       </Link>
                   </li>
                   <li>
                   <Link to='/meilist'>
                       <div className="item item-3 clearfix">
                           <div className="pic fl"><i className="iconfont">&#xe653;</i></div>
                           <div className="txt-box">
                               <h2>美视</h2>
                               <p>搞笑/流行/价值/片段</p>
                           </div>
                       </div>
                   </Link>
                   </li>
            </ul>
     </div>
        )
    }
}
export default Meidiy;