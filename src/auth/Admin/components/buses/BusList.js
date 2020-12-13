import { Button, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import {index} from '../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import React,{useEffect} from 'react'
import { API_URL } from "../../../../constants/constants"
import { FETCH_BUSES } from "../../../state/Constants"
import BusesLoading from "../../../loading/BusesLoading"
import { DirectionsBus } from "@material-ui/icons"
import Reat,{useState} from 'react'
import { grey } from "@material-ui/core/colors"
import DriverAndAssistant from "./widgets/DriverAndAssistant"
import AddNewBus from "./AddNewBus"
import {openDialog} from '../../../state/AppAction'
const BusList = ()=>{
    const dispatch = useDispatch()
    const buses = useSelector(state=>state.authReducer.busesReducer.buses.data);
    const loading = useSelector(state=>state.authReducer.busesReducer.loading)
    const [bus,setBus] = useState(null)
    const [selected,setSelected] =useState(null);
    
    useEffect(()=>{
        dispatch(index(`${API_URL}buses`,FETCH_BUSES))
    })

    const handleClick =(bus)=>{
        setBus(bus)
        setSelected(bus.id)
    }

    const addNewBus = ()=>{
        const showData={
            show:true,
            title:'Add new bus',
            page:<AddNewBus/>
        }
        dispatch(openDialog(showData))
    }
    return(
            <div>
                {
                    loading
                    ?
                        (
                          <BusesLoading/>  
                        )
                    :
                        (
                            <div>
                                {
                                    buses.length<=0
                                    ?
                                        (
                                            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                                <Typography color={'secondary'}>
                                                    There is not registered bus until now ):
                                                </Typography>
                                                <Button 
                                                 onClick={()=>addNewBus()}
                                                 color={'secondary'}
                                                 variant={'outlined'} 
                                                 style={{marginTop:25,textTransform:'none'}}>
                                                    Register new bus
                                                </Button>
                                            </div>
                                        )
                                    :
                                        (
                                            <Grid container spacing={1}>
                                                <Grid item md={3}>
                                                    <List>
                                                        {
                                                            buses.map(bus=>(
                                                                <ListItem button item md={12} xs={12}
                                                                style={{
                                                                    borderLeft:selected===bus.id?'5px solid #031b4e':null,
                                                                    backgroundColor:selected===bus.id?grey[400]:null,
                                                                }}
                                                                >
                                                                    <ListItemIcon>
                                                                        <DirectionsBus/>
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                    
                                                                    primary={bus.plate_number}
                                                                    secondary={bus.number}
                                                                    onClick={()=>handleClick(bus)}
                                                                    />
                                                                </ListItem>
                                                            ))
                                                        }
                                                    </List>
                                                </Grid>

                                                <Grid item md={1}>
                                                    <Divider
                                                    orientation={'vertical'}
                                                    style={{height:'100%'}}
                                                    />
                                                </Grid>
                                                <Grid item md={8}>
                                                        {
                                                            bus===null
                                                            ?
                                                                (
                                                                    <Typography>
                                                                        Select on your bus
                                                                    </Typography>
                                                                )
                                                            :
                                                                (
                                                                    <Card style={{marginLeft:-70}} elevation={0}>
                                                                        <CardHeader
                                                                        title={bus.plate_number}
                                                                        action={
                                                                            bus.number
                                                                        }
                                                                        
                                                                        />
                                                                        <Divider/>
                                                                        <CardContent style={{padding:0}}>
                                                                            <DriverAndAssistant bus={bus} />
                                                                        </CardContent>
                                                                    </Card>
                                                                )
                                                        }
                                                </Grid>
                                            </Grid>
                                        )
                                }
                            </div>
                        )
                }
            </div>
        )
    }

export default BusList