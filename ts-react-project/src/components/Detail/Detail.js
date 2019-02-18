import React,{Component} from 'react'
import './Detail.css';
import code from '../../assets/images/code.png';
import asynColumn from '../../store/actions/asynColumn';
import {connect} from 'react-redux';
import * as types from '../../store/types';

class Detail extends Component{
    
    componentDidMount(){
        let id = this.props.match.params.id-0;
        let {getDetail} = this.props;
        getDetail(id)
    }

    render(){
        let {detail} = this.props;
        return (
            <div>
            <div className="content con-detail">
                <div className="top-nav">
                    <ul className="clearfix">
                        <li><span><i className="iconfont">&#xe61d;</i>全部分类</span></li>
                        <li><span><i className="iconfont">&#xe601;</i>点赞排序</span></li>
                        <li><span><i className="iconfont">&#xe616;</i>我DIY的</span></li>
                    </ul>
                </div>
                <div className="detail_box">
                    <div className="con">
                        <p className="title">{detail.title}</p>
                        <p><img src={detail.src} /></p>
                    </div>
                    <div className="info clearfix">
                        <span className="author"><img src={detail.auth_face} />{detail.auth}</span>
                        <span className="zan"><i className="iconfont">&#xe600;</i>{detail.like}人点赞</span>
                        <span className="collect"><i className="iconfont">&#xe605;</i>{detail.collect}人收藏</span>
                    </div>
                </div> 
                <div className="user_card clearfix">
                    <i className="icon icon-left"></i>
                    <i className="icon icon-right"></i>
                    <div className="item pic">
                        <div className="userimg"><img src={detail.auth_face} /></div>
                        <div className="username">{detail.auth}</div>
                    </div>
                    <div className="item info">
                        <div className="tel">电话：15715578598</div>
                        <div className="signature">个性签名：霉粉</div>
                        <p className="signature_txt">We never go out of style.</p>
                    </div>
                    <div className="item code">
                        <div className="codeimg"><img src={code}/></div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

const initMapStateToProps = state => ({
    detail:state.detail
});

const initMapDispatchToProps = dispatch => ({
    getDetail:(id)=>dispatch(asynColumn({
        type:types.UPDATE_DETAIL,
        url:'http://47.101.40.19:3000/detail',
        id:id
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail);