import {FETCH_BUSES, STORE_BUS} from '../Constants'

const initialState = {
    buses:{
        data:[]
    },
    loading:true,
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_BUSES:
            return{
                ...state,
                loading:false,
                buses:action.payload

            }

            case STORE_BUS:
                return{
                    ...state,
                    response:action.payload
                }

            default:
                return state
    }
}