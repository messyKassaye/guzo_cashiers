import {makeStyles} from '@material-ui/core'

const bankStyle = makeStyles((theme)=>(
    {
        accounts:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        },
        no_account:{
            display:'flex',flexDirection:'column',alignItems:'center'
        },
        actions:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'flex-end',
            padding:0
        },
        button:{
            textTransform:'none',
            marginTop:15
        },
        form:{
            display:'flex',
            flexDirection:'column',
            paddingLeft:50,
            paddingRight:50
        },
        text_input:{
            width:'100%',
            marginBottom:25
        }
    }
))

export default bankStyle