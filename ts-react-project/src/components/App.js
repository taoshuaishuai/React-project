import React,{Component} from 'react'

import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';
import Error from '../common/Error/Error';
import Loading from '../common/Loading/Loading';

import Home from './Home/Home';
import Login from './Login/Login';
import Reg from './Reg/Reg';
import Meidiy from './Meidiy/Meidiy';
import Meiedit from './Meiedit/Meiedit';
import Meilist from './Meilist/Meilist';
import Tiediy from './Tiediy/Tiediy';
import User from './User/User';
import Usercode from './Usercode/Usercode';
import Usermsg from './Usermsg/Usermsg';
import Detail from './Detail/Detail';

import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from '../guard/Auth';

import {connect} from 'react-redux';
import * as types from '../store/types';


class App extends Component{

    componentWillReceiveProps(nextProps){
        //监听路由
        let path = nextProps.location.pathname;
        this.watchRouter(path)

        //路由切换，每次切换到页面顶部
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
        
    }

    watchRouter(path){

        let {viewNav,viewFoot} = this.props;

        if(/home|meidiy|tiediy|usermsg|usercode/.test(path)){
           viewNav(true);
           viewFoot(true);
        }
        if(/login|reg|detail|meiedit|meilist/.test(path)){
            viewNav(true);
            viewFoot(false);
        }
        if(/user/.test(path)){
            viewNav(false);
            viewFoot(true);
        }
    }

    componentDidMount(){
        let path = this.props.location.pathname;
        this.watchRouter(path)
    }

    render(){

        let {bNav,bFoot,bLoading} = this.props;    
    
        return (
            <>
                {bNav && <Header/>}
                {bLoading && <Loading/>}

                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/meidiy" component={Meidiy} />
                    <Route path="/meilist" component={Meilist} />
                    <Route path="/meiedit" component={Meiedit} />
                    <Route path="/tiediy" component={Tiediy} />
                    {/* <Route path="/user" component={User} /> */}
                    <Auth path="/user" component={User} />
                    {/* <Route path="/usermsg" component={Usermsg} /> */}
                    <Auth path="/usermsg" component={Usermsg} />
                    <Route path="/usercode" component={Usercode} />
                    <Route path="/detail/:id" component={Detail} />
                    <Redirect exact from="/" to="/home" />
                    <Route component={Error} />
                </Switch>

                {bFoot && <Footer/>}
            </>
        )
    }
}

const initMapStateToProps = state => ({
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading,
});

const initMapDispatchToProps = dispatch => ({
    viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
})


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(App);