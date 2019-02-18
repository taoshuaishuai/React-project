import React from 'react';
import './Footer.css'
import {NavLink} from 'react-router-dom';

import nav1 from '../../assets/images/nav1.png';
import nav2 from '../../assets/images/nav2.png';
import nav3 from '../../assets/images/nav3.png';
import nav4 from '../../assets/images/nav4.png';

const Footer = (props) => (
    <div id="footer" className="foot">
        <ul>
            <li>
                <NavLink to={{pathname:'/home'}} activeClassName="active">
                    <span className="img"><img src={nav1}/></span>
                    <p>首页</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname:'/tiediy'}} activeClassName="active">
                    <span className="img"><img src={nav2}/></span>
                    <p>贴DIY</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname:'/meidiy'}} activeClassName="active">
                        <span className="img"><img src={nav3}/></span>
                        <p>美DIY</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={{pathname:'/user'}} activeClassName="active">
                        <span className="img"><img src={nav4}/></span>
                        <p>我的</p>
                </NavLink>
            </li>
        </ul>
    </div>
);

export default Footer