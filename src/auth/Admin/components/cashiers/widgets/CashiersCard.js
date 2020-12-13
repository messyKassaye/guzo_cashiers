import  { Card, CardContent, CardActions, Typography, Avatar, Button } from "@material-ui/core"

import CashiersStyle from '../styles/CashiersStyle'

const CashiersCard =(props)=>{
    const classes= CashiersStyle()
    const cashier = props.cashier
    return(
        <Card>
            <CardContent className={classes.container}>
                <Avatar>
                    {cashier.cashier.name.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant={'h5'} style={{marginTop:20}}>
                    {cashier.cashier.name}
                </Typography>
                <Typography color={'textSecondary'}>
                    {cashier.cashier.phone}
                </Typography>
            </CardContent>
            <CardActions className={classes.cashiersFooter}>
                <Button variant={'text'} color={'primary'} style={{textTransform:'none'}}>
                    Block
                </Button>

                <Button variant={'text'} color={'primary'} style={{textTransform:'none'}}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    )
}

export default CashiersCard