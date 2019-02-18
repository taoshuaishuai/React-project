import React,{Component} from 'react'
import './Meiedit.css';
class Meiedit extends Component{
    render(){
        return (
            <div>
                    <div className="content mei_edit">
                <div className="detail_box">
                    <div className="con">
                        <div className="row-r1">
                        <input className="input_title" placeholder="请输入标题（必填）"/>
                    </div>
                    <div className="row-r1" style={{height:"300px", borderBottom:"0"}}>
                    <p><img style={{width:"100%"}} src="/images/meiedit.jpg"/></p>
                        <input className="input_title" placeholder="内容" />
                    </div>
                        
                    </div>
                </div> 
                <div className=" clearfix"></div>
            </div>
            
            <footer id="footer" className="foot">
                    <a href="#" className="green-btn ft-btn">发布</a>
            </footer>
        </div>
        )
    }
}
export default Meiedit;