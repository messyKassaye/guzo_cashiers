import {makeStyles, maleStyles} from '@material-ui/core'

const BusStyle = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"center"
    },
    form:{
        display:'flex',
        flexDirection:'column',
        width:'80%'
    },
    text_input:{
        width:'100%',
        marginBottom:20
    },
   
    driverContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    driver:{
        display:'flex',
        flexDirection:'column',
        padding:10,
        alignItems:'center'
    },
    addButton:{
        textTransform:'none',
        marginTop:20

    }
}))

export default BusStyle