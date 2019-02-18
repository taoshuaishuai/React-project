import React,{Component} from 'react'
import './Usercode.css';
import code from '../../assets/images/code.png';
class Usercode extends Component{
    render(){
        return (
            <div id="content">
            <div id="con-two">
                <div className="con-code">
                  <p><img src={code}  /></p>
                  <p>扫码上面的二维码，加为好友</p>
                </div>
            </div>
        </div>
        )
    }
}
export default Usercode;