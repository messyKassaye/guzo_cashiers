import { Avatar, Button, Typography } from '@material-ui/core'
import { PersonAdd } from '@material-ui/icons'
import BusStyle from '../style/BusStyle'
import AddDriverAssistant from './AddDriverAssistant'
import {openDialog} from '../../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
const DriverAndAssistant =(props)=>{
    const classes = BusStyle()
    const bus = props.bus
    const dispatch = useDispatch()

    const addDriver =(placeholder,type)=>{
        const showData={
            show:true,
            title:`Assign driver for ${bus.number}`,
            page:<AddDriverAssistant type={type} placeholder={placeholder} bus={bus}/>
        }
        dispatch(openDialog(showData))
    }
    return (
        <div className={classes.driverContainer}>
           {
               bus.driver===null
               ?
                (
                    <div className={classes.driver}>
                        <Avatar style={{width:75,height:75}}>
                            <PersonAdd/>
                        </Avatar>
                        <Typography>
                            Driver is not assigned
                        </Typography>
                        <Button onClick={()=>addDriver({'placeholder':'Driver name',btnLabel:'Add driver',type:'Driver'})} className={classes.addButton} variant={'outlined'} color={'primary'}>
                            Assign now
                        </Button>
                     </div>
                )
               :
                (
                    <div className={classes.driverContainer}>
                            <div className={classes.driver}>
                            <Avatar style={{width:50,height:50}}>
                                {bus.driver.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <Typography variant={'h5'}>
                                {bus.driver.name}
                            </Typography>
                            <Typography color={'textSecondary'}>
                                {bus.driver.phone}
                            </Typography>
                            <Button 
                                onClick={()=>addDriver({'placeholder':'Driver name',btnLabel:'Add driver',type:'Driver'})}
                                color={'secondary'} 
                                variant={'outlined'} 
                                style={{marginTop:15,textTransform:'none'}}>
                                Re assign
                            </Button>
                            </div>
                    </div>
                )
           }


{
               bus.assistant===null
               ?
                (
                    <div className={classes.driver}>
                        <Avatar style={{width:75,height:75}}>
                            <PersonAdd/>
                        </Avatar>
                        <Typography>
                            Assistant is not assigned
                        </Typography>
                        <Button onClick={()=>addDriver({'placeholder':'Assistant name',btnLabel:'Add assistant',type:'Assistant'})} className={classes.addButton} variant={'outlined'} color={'primary'}>
                            Assign now
                        </Button>
                     </div>
                )
               :
                (
                    <div className={classes.driverContainer}>
                            <div className={classes.driver}>
                            <Avatar style={{width:50,height:50}}>
                                {bus.assistant.name.charAt(0).toUpperCase()}
                            </Avatar>
                            <Typography variant={'h5'}>
                                {bus.assistant.name}
                            </Typography>
                            <Typography color={'textSecondary'}>
                                {bus.assistant.phone}
                            </Typography>

                            <Button onClick={()=>addDriver({'placeholder':'Assistant name',btnLabel:'Add assistant',type:'Assistant'})} color={'secondary'} variant={'outlined'} style={{marginTop:15,textTransform:'none'}}>
                                Re assign
                            </Button>
                            </div>
                    </div>
                )
           }
        </div>
    )
}

export default DriverAndAssistant