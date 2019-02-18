import React,{Component} from 'react'
import './Meilist.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import asynColumn from '../../store/actions/asynColumn';
import * as types from '../../store/types';


class Meilist extends Component{
    
    componentDidMount(){
        this.props.getMeilist()
    }
    render(){
        let {meilist} = this.props;
        return (
            <div className="content mei_list">
            <div className="top-nav">
                <ul className="clearfix">
                    <li><span><i className="iconfont">&#xe61d;</i>全部分类</span></li>
                    <li><span><i className="iconfont">&#xe601;</i>点赞排序</span></li>
                    <li><span><i className="iconfont">&#xe616;</i>我DIY的</span></li>
                </ul>
            </div>
            <div className="card-list">
                <div className="con-list">
                     <ul className="clearfix">
                         <li className="first">
                             <div className="photo-card" style={{background:"#f0f0f0"}}>
                                 <Link to="/meiedit" className="upload_btn">
                                     <i className="iconfont">&#xe602;</i>
                                     <p>上传图片/文字</p>
                                 </Link>
                             </div>
                         </li>
                         {
                             meilist.map((item,index)=>(
                                <li key={item.id}>
                                    <div className="photo-card">
                                        <Link to={{pathname:'/detail/'+item.id}} className="img" style={{backgroundImage:'url('+item.src+')'}}></Link>
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
        </div>
        )
    }
}


const initMapStateToProps = state => ({
    meilist:state.meilist
});

const initMapDispatchToProps = dispatch => ({
    getMeilist:() => dispatch(asynColumn({
        type:types.UPDATE_MEILIST,
        url:'http://47.101.40.19:3000/meilist'
    }))
})


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Meilist);