import {makeStyles} from '@material-ui/core'

const formStyle = makeStyles((theme)=>({
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
}))

export default formStyle