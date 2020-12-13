import { Avatar, Typography } from "@material-ui/core";
import Logo from "../components/Logo";
import { getRole } from "../TokenService";
import {index} from '../auth/state/AppAction'
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { API_AUTH_URL } from "../constants/constants";
import { ME } from "../auth/state/Constants";
const DrawerProfile = ()=>{
    const [label,setLabel] = useState('')
    const user = useSelector(state=>state.authReducer.userReducer.meData.data)
    const loading = useSelector(state=>state.authReducer.userReducer.loading)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(index(`${API_AUTH_URL}me`,ME))
    })

    const findRole = ()=>{
        let id = JSON.parse(getRole()).id
        if(id===2){
            return 'Admin of '
        }else{
            return 'Cashiers of'
        }
    }
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
            {
                loading
                ?
                    (
                        <div style={{display:'flex',flexDirection:'column',paddingLeft:25,paddingRight:25}}>
                            Loading...
                        </div>
                    )
                :
                    (
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                            <Avatar src={user.relations.association.logo_path}
                             style={{width:75,height:75}}
                             variant={'circular'}
                            />
                            <Typography>
                                {findRole()}
                            </Typography>
                            <Typography variant={'h6'} style={{color:'white'}}>
                                {user.relations.association.name}
                            </Typography>
                        </div>
                    )
            }
        </div>
    )
}

export default DrawerProfile

