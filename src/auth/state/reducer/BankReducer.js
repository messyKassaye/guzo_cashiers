import {FETCH_BANKS, SET_ACCOUNT} from '../Constants'

const initialState = {
    banks:[],
    loading:true,
    setAccounResponse:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_BANKS:
            return{
                ...state,
                loading:false,
                banks:action.payload
            }

            case SET_ACCOUNT:{
                return{
                    ...state,
                    setAccounResponse:action.payload
                }
            }
            default:
                return state
    }
}