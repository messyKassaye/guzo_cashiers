import {makeStyles} from '@material-ui/core'

const FormStyle = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        width:'80%'
    },
    text_input:{
        marginBottom:20,
        width:'100%'
    }
}))

export default FormStyle