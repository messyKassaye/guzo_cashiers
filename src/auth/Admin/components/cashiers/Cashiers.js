import { Add, AttachMoney } from "@material-ui/icons"
import AddNewCashier from "./widgets/AddNewCashier"
import {useEffect} from 'react'
import { Card, CardHeader, IconButton, CardContent, Divider, Grid } from "@material-ui/core"
import {useDispatch,useSelector} from 'react-redux'
import {openDialog,index} from '../../../state/AppAction'
import UsersLoading from "../../../loading/UsersLoading"
import CashiersCard from "./widgets/CashiersCard"
import { FETCH_CASHIERS } from "../../../state/Constants"
import { API_URL } from "../../../../constants/constants"

const Cashiers = ()=>{

    const cashiers = useSelector(state=>state.authReducer.cashiersReducer.cashiers.data);
    const loading = useSelector(state=>state.authReducer.cashiersReducer.loading)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(index(`${API_URL}cashiers`,FETCH_CASHIERS))
    })
    const addNewCashier =()=>{
        const showData={
            show:true,
            title:'Add new cashier',
            page:<AddNewCashier/>
        }
        dispatch(openDialog(showData))
    }
    return(
        <Card>
            <CardHeader
             title={'Cashiers'}
             avatar={<AttachMoney/>}
             action={
                 <IconButton onClick={addNewCashier}>
                     <Add/>
                 </IconButton>
             }
            />
            <Divider/>
            <CardContent>
                {
                    loading
                    ?
                        (
                            <UsersLoading/>
                        )
                    :
                        (
                            <Grid container spacing={2}>
                                {
                                    cashiers.map(cashier=>(
                                        <Grid item md={3} xs={12} sm={12}>
                                            <CashiersCard cashier={cashier}/>
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
export default Cashiers