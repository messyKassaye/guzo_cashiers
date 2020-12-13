import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import BusStyle from '../style/BusStyle'
import React,{useState,useEffect} from 'react'
import UseForm from '../../../../../commons/UseForm'
import LoadingButton from '../../../../../commons/LoadingButton'
import {useDispatch,useSelector} from 'react-redux'
import { Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import {store} from '../../../../state/AppAction'
import { API_URL } from '../../../../../constants/constants'
import { DRIVER_ASSISTANT_STORE } from '../../../../state/Constants'
const AddDriverAssistant =(props)=>{
    const classes = BusStyle()
    const {inputs,handleInputChange} = UseForm({'name':'','phone':'','bus_id':props.bus.id,'type':props.type})
    const [errorMessage,setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.name.length > 0 && inputs.phone.length > 0

    const dispatch = useDispatch();
    const response = useSelector(state=>state.authReducer.driverAssistantReducer.response)

    useEffect(()=>{
        if(response.status===true){
            setLoading(false)
            setSubmitted(false)
            setFinished(false)
        }
    })
    const handleSubmit =()=>{
        setLoading(true)
        setSubmitted(true)
        dispatch(store(`${API_URL}driver_assistant`,inputs,DRIVER_ASSISTANT_STORE))
    }
    return(
        <div className={classes.container}>
            <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                <Typography style={{color:green[500]}}>
                    {
                        response.message
                    }
                </Typography>
                <TextValidator
                    
                    className={classes.text_input}
                    label={props.placeholder.placeholder}
                    onChange={handleInputChange}
                    name="name"
                    type='text'
                    value={inputs.name}
                    validators={['required']}
                    errorMessages={['Please enter driver name']}
                />

                <TextValidator
                    className={classes.text_input}
                    label={'Phone number'}
                    onChange={handleInputChange}
                    name="phone"
                    type='text'
                    value={inputs.phone}
                    validators={['required']}
                    errorMessages={['Please enter phone number']}
                />

                    <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={props.placeholder.btnLabel}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                props.placeholder.btnLabel
                            }
                    </LoadingButton>
            </ValidatorForm>
        </div>
    )
}

export default AddDriverAssistant