import React,{Component} from 'react'
import Column1 from '../Column1/Column1';
import Column2 from '../Column2/Column2';
import Column3 from '../Column3/Column3';
import Column4 from '../Column4/Column4';
import ReactSwipe from 'react-swipe';
import './Home.css';
import {connect} from 'react-redux';
import * as types from '../../store/types';
import asynColumn from '../../store/actions/asynColumn';

class Home extends Component{

    constructor(props){
        super();
        props.getColumn1();
        props.getColumn2();
        props.getColumn3();
        props.getColumn4();
    }

    render(){

        let {column1,column2,column3,column4} = this.props; 
        
        return (
            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 1500,

                    }}
                    >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </ReactSwipe>
                <Column1 column1={column1} />
                <Column2 column2={column2} />
                <Column3 column3={column3} />
                <Column4 column4={column4} />
            </div>
        )
    }
}

const initMapStateToProps = state => ({
    column1:state.column1,
    column2:state.column2,
    column3:state.column3,
    column4:state.column4,
});

const initMapDispatchToProps = dispatch => ({
    getColumn1:()=>dispatch(asynColumn({
        type:types.UPDATE_COLUMN1,
        url:'http://47.101.40.19:3000/column1'
    })),
    getColumn2:()=>dispatch(asynColumn({
        type:types.UPDATE_COLUMN2,
        url:'http://47.101.40.19:3000/column2'
    })),
    getColumn3:()=>dispatch(asynColumn({
        type:types.UPDATE_COLUMN3,
        url:'http://47.101.40.19:3000/column3'
    })),
    getColumn4:()=>dispatch(asynColumn({
        type:types.UPDATE_COLUMN4,
        url:'http://47.101.40.19:3000/column4'
    })),
    
})


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home);