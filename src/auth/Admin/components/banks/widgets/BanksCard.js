import { Card, CardHeader, CardContent, Avatar, Divider, Typography, Button, CardActions } from "@material-ui/core"
import bankStyle from '../bankStyle'
import {openDialog} from '../../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import SetAccount from "./SetAccount"
const BanksCard =(props)=>{
    const classes = bankStyle()
    const accounts = props.bank.accounts
    const bank = props.bank

    const dispatch = useDispatch()
    
    const setAccount = (bank)=>{
        const showData={
            show:true,
            title:`Set your account for ${bank.name}`,
            page:<SetAccount bank={bank}/>
        }
        dispatch(openDialog(showData))
    }

    const editAccount = account=>{
        const showData={
            show:true,
            title:`Set your account for ${bank.name}`,
            page:<SetAccount edit={true} form={account} bank={bank}/>
        }
        dispatch(openDialog(showData))

    }
    return <Card>
        <CardHeader
        title={bank.name}
        avatar={<Avatar>{bank.name.charAt(0)}</Avatar>}
        />
        <Divider/>
        <CardContent>
            {
                accounts.length>0
                ?
                    (
                        <div className={classes.accounts}>
                            <Typography>
                                {`Account number: ${accounts[0].account_number}`}
                            </Typography>
                            <Typography>
                                {`Account holder name: ${accounts[0].holder_name}`}
                            </Typography>
                        </div>
                    )
                :
                    (
                        <div className={classes.no_account}>
                            <Typography color={'secondary'}>
                                Account is not set yet ):
                            </Typography>
                            <Button 
                            onClick={()=>setAccount(bank)}
                             color={'primary'} 
                             variant={'outlined'} 
                             className={classes.button}>
                                Set now
                            </Button>
                        </div>
                    )

            }
            {
                accounts.length>0
                ?
                    <CardActions className={classes.actions}>
                        <Button onClick={()=>editAccount(bank)} color={'primary'} variant={'outlined'} className={classes.button}>
                            Edit
                        </Button>
                    </CardActions>
                :
                    (null)
            }
        </CardContent>
    </Card>
}

export default BanksCard