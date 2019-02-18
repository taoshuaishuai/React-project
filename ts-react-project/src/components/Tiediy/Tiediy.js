import React,{Component} from 'react'
import './Tiediy.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asynColumn from '../../store/actions/asynColumn';

class Tiediy extends Component{
    
    componentDidMount(){
        this.props.getTiediy()
    }
    render(){
        let {column4} = this.props;
        return (
            <div className="content">
            <div className="top-nav">
                <ul className="clearfix">
                    <li><span><i className="iconfont">&#xe61d;</i>全部分类</span></li>
                    <li><span><i className="iconfont">&#xe601;</i>点赞排序</span></li>
                    <li><span><i className="iconfont">&#xe616;</i>我DIY的</span></li>
                </ul>
            </div>
            <div className="column imgtxt-list">
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
                     <div className="Edit">
                         <Link to="/meiedit" className="edit-btn"><i className="iconfont">&#xe62e;</i>我要贴</Link>
                     </div>
                 </div>
            </div>  
        </div>
        )
    }
}


const initMapStateToProps = state => ({
    column4:state.column4
});

const initMapDispatchToProps = dispatch => ({
    getTiediy:() => dispatch(asynColumn({
        type:types.UPDATE_COLUMN4,
        url:'http://47.101.40.19:3000/column4'
    }))
})


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Tiediy);