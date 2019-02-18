import * as types from './types';

const reducer = (state,{type,payload}) => {
    switch(type){
        case types.VIEW_NAV:
        return{
            ...state,
            bNav:payload
        };

        case types.VIEW_FOOT:
        return{
            ...state,
            bFoot:payload
        };

        case types.VIEW_LOADING:
        return{
            ...state,
            bLoading:payload
        };

        case types.UPDATE_COLUMN1:
        return{
            ...state,
            column1:payload
        };

        case types.UPDATE_COLUMN2:
        return{
            ...state,
            column2:payload
        };

        case types.UPDATE_COLUMN3:
        return{
            ...state,
            column3:payload
        };

        case types.UPDATE_COLUMN4:
        return{
            ...state,
            column4:payload
        };

        case types.UPDATE_MEILIST:
        return{
            ...state,
            meilist:payload
        };

        case types.UPDATE_DETAIL:
        return{
            ...state,
            detail:payload.data[payload.id-1]
        };

        case types.CHECK_USER:
        return{
            ...state,
            name:payload
        };

        case types.CHECK_AUTH:
        return{
            ...state,
            auth:payload
        };


        default:
            return state
    }
}

export default reducer;