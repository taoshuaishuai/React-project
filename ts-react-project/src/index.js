import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/base.css';
import './assets/iconfont/iconfont.css';

import App from './components/App';
import {BrowserRouter,Route} from 'react-router-dom';

import store from './store';
import {Provider} from 'react-redux';

// import axios from 'axios'; //安装axios插件
// axios.defaults.withCredentials=true; //全局配置携带跨源凭证


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider> 
    ,
    document.getElementById('root')
);

