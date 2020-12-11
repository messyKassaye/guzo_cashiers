import { Divider, Typography } from '@material-ui/core'
import useStyles from '../styles/homeStyle'
export const Footer = ()=>{
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <Divider className={classes.divider}/>
            <Typography color={'textSecondary'} style={{marginLeft:15,marginRight:15}}>
                Prepared by MEBA soft
            </Typography>
            <Divider className={classes.divider}/>
        </div>
    )
}

export default Footer