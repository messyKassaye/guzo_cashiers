import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import formStyle from '../../../../style/formStyle'
import UseForm from '../../../../../commons/UseForm'
import { Button, Grid, Typography } from '@material-ui/core'
import {useState,useEffect} from 'react'
import LoadingButton from '../../../../../commons/LoadingButton'
import {useDispatch,useSelector} from 'react-redux'
import { store } from '../../../../state/AppAction'
import { API_URL } from '../../../../../constants/constants'
import { STORE_CASHIERS } from '../../../../state/Constants'
import { green } from '@material-ui/core/colors'
const AddNewCashier =()=>{
    const classes = formStyle()
    const [password,setPassword] = useState('')
    const {inputs,handleInputChange} = UseForm({'name':'','phone':'','password':''})
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.name.length > 0 && inputs.phone.length > 0

    const dispatch = useDispatch();
    const response = useSelector(state=>state.authReducer.cashiersReducer.response)

    useEffect(()=>{
        if(response.status===true){
            setLoading(false)
            setSubmitted(false)
            setFinished(false)
        }
    })
    const  generatePassword = ()=>{
        const passwords = Math.floor(1000 + Math.random() * 9000);
        setPassword(passwords)
    }

    const handleSubmit = ()=>{
        setLoading(true)
        setSubmitted(true)
        inputs.password = password
        dispatch(store(`${API_URL}cashiers`,inputs,STORE_CASHIERS))
    }
    return(
        <div className={classes.container}>
            <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                <Typography style={{color:green[500]}}>
                    {response.message}
                </Typography>
                <TextValidator
                    className={classes.text_input}
                    label={'Cashier name'}
                    onChange={handleInputChange}
                    name="name"
                    type='text'
                    value={inputs.name}
                    validators={['required']}
                    errorMessages={['Please enter cashier name']}
                />

                <TextValidator
                    className={classes.text_input}
                    label={'Cashier phone number'}
                    onChange={handleInputChange}
                    name="phone"
                    type='text'
                    value={inputs.phone}
                    validators={['required']}
                    errorMessages={['Please enter cashier phone number']}
                />

                <Grid container spacing={2}>
                    <Grid item md={7} xs={12} sm={12}>
                        <TextValidator
                        className={classes.text_input}
                        label={'Cashier password'}
                        onChange={handleInputChange}
                        name="password"
                        type='text'
                        value={password}
                        validators={['required']}
                        errorMessages={['Please enter cashier password']}/>
                    </Grid>

                    <Grid item md={5} xs={12} sm={12}>
                        <Button onClick={()=>generatePassword()} variant={'outlined'} color={'secondary'} style={{textTransform:'none',marginTop:20}}>
                            Generate password
                        </Button>
                    </Grid>
                </Grid>

                <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={'Add cashier'}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                'Add cashier'
                            }
                    </LoadingButton>

            </ValidatorForm>
        </div>
    )
}

export default AddNewCashier