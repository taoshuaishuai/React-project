//异步action  返回函数
import * as types from '../types';

const asynColumn = ({type,url,id}) => (dispatch,getState) => {

    dispatch({type:types.VIEW_LOADING,payload:true});

    fetch(
        url,
        // {
        //     method:"GET"
        // }
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            if(id){
                dispatch({type:type,payload:{data,id}})
            }else{
                dispatch({type:type,payload:data})
            }
        }
    )
}


export default asynColumn;