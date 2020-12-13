import {ME} from '../Constants'

const initialState = {
    meData:{
        data:{}
    },
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case ME:
            return{
                ...state,
                meData:action.payload,
                loading:false
            }

        default:
            return state
    }
}