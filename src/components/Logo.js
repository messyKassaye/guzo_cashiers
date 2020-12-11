import { Typography } from "@material-ui/core"

import useStyles from '../styles/homeStyle'
import {Link} from 'react-router-dom'
export const Logo =(props)=>{
    const classes = useStyles();
    return (
        <div className={classes.logo} >
            <Typography variant={'h4'}  className={classes.first}>Gu</Typography>
            <Typography variant={'h4'}  className={classes.second}>Zo</Typography>
        </div>
    )
}

export default Logo