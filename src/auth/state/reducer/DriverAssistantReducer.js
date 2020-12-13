import {DRIVER_ASSISTANT_STORE} from '../Constants'

const initialState = {
    response:{
        status:false,
        message:""
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case DRIVER_ASSISTANT_STORE:
            return{
                ...state,
                response:action.payload
            }

            default:
                return state
    }
}