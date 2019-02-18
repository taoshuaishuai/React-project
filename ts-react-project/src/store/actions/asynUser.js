//异步action 返回函数

import * as types from '../types';
import axios from 'axios';

const asynUser = ({url,username,password}) => (dispatch,getState)=>{
    // console.log(username,password)
    dispatch({type:types.VIEW_LOADING,payload:true});

    // return fetch(
    //     url,{
    //         method:'GET',
    //         body:{
    //             username:username,
    //             password:password
    //             }
    //         }
    // ).then(
    //     res=>res.json()
    // ).then(
    //     data=>{
    //         dispatch({type:types.VIEW_LOADING,payload:false});
    //         return data
    //     }
    // )

    return axios({
             url,
             params:{
                 username:username,
                 password:password
             },
            }).then((res)=>{
                dispatch({type:types.VIEW_LOADING,payload:false});
                return res.data
            })

}

export default asynUser;