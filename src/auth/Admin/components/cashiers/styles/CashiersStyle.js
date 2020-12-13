import {makeStyles} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

const CashiersStyle = makeStyles((theme)=>({
    passwordContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },

    cashiersFooter:{
        backgroundColor:'#f5f8fd',
        color:grey[600],
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
}))

export default CashiersStyle