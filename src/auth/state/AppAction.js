import axios from 'axios'
import {OPEN_DIALOG} from './Constants'
export const index =(path,actionType)=>dispatch=>{
    axios.get(path)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:actionType,
        payload:res
    }))
}

export const store = (path,data,actionType)=>dispatch=>{
    axios.post(path,data)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:actionType,
        payload:res
    }))
}

export const update = (path,data,actionType)=>dispatch=>{
    axios.put(path,data)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:actionType,
        payload:res
    }))
}

export const show =(path,actionType)=>dispatch=>{
    axios.get(path)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:actionType,
        payload:res
    }))
}


export const openDialog =(data)=>dispatch=>{
    dispatch({
        type:OPEN_DIALOG,
        payload:data
    })
}