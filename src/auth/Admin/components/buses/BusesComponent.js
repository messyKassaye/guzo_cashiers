import { Grid, Card, CardHeader, CardContent, Divider, IconButton } from "@material-ui/core"
import { Add, DirectionsBus } from "@material-ui/icons"
import AddNewBus from "./AddNewBus"
import BusList from "./BusList"
import {openDialog} from '../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import {NewBusForm,Inputs} from './forms/BusForms'
import AppForm from "../../../../commons/AppForm"
    
    const BusesComponent =()=>{
        const dispatch = useDispatch()

    const addNewBus = ()=>{
        const showData={
            show:true,
            title:'Add new bus',
            page:<AddNewBus/>
        }
        dispatch(openDialog(showData))
    }

    return(
        <Card>
            <CardHeader
            title={'Buses'}
            avatar={<DirectionsBus/>}
            action={
                <IconButton onClick={()=>addNewBus()}>
                    <Add/>
                </IconButton>
            }/>
            <Divider/>
            <CardContent>
                <BusList/>
            </CardContent>
        </Card>
    )
}
export default BusesComponent