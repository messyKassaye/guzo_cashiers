import { Card, CardContent, CardHeader, Divider, Grid, Typography } from "@material-ui/core"
import { BusinessOutlined } from "@material-ui/icons"
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {index} from '../../../state/AppAction'
import { FETCH_BANKS } from "../../../state/Constants"
import {API_URL} from '../../../../constants/constants'
import BanksCard from "./widgets/BanksCard"
const Banks =()=>{

    const dispatch = useDispatch();
    const banks = useSelector(state=>state.authReducer.bankReducer.banks.data)
    const loading = useSelector(state=>state.authReducer.bankReducer.loading)

    useEffect(()=>{
        dispatch(index(`${API_URL}banks`,FETCH_BANKS))
    })
    return (
        <Card>
            <CardHeader
            title={'Banks'}
            avatar={<BusinessOutlined/>}
            />
            <Divider/>
            <CardContent>
                {
                    loading
                    ?
                        (
                            <Typography>Loading....</Typography>
                        )
                    :
                        (
                           <Grid container spacing={2}>
                               {
                                   banks.map(bank=>(
                                       <Grid item md={4} xs={12} sm={12}>
                                           <BanksCard bank={bank}/>
                                       </Grid>
                                   ))
                               }
                           </Grid>
                        )
                }
            </CardContent>
        </Card>
    )
}

export default Banks