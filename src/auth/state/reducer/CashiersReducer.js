import {FETCH_CASHIERS, STORE_CASHIERS} from '../Constants'

const initialState = {
    response:{
        status:false,
        message:''
    },
    cashiers:{},
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_CASHIERS:
            return {
                ...state,
                response:action.payload
            }

            case FETCH_CASHIERS:
                return {
                    ...state,
                    cashiers:action.payload,
                    loading:false
                }

            default:
                return state
    }
}