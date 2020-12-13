import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"
import bankStyle from '../bankStyle'
import UseForm from '../../../../../commons/UseForm'
import React,{useState,useEffect} from 'react'
import LoadingButton from "../../../../../commons/LoadingButton"
import {store} from '../../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import { Typography } from "@material-ui/core"
import { SET_ACCOUNT } from "../../../../state/Constants"
import { API_URL } from "../../../../../constants/constants"
import { green } from "@material-ui/core/colors"
const SetAccount =(props)=>{
    const {inputs,handleInputChange} = UseForm({holder_name:'',account_number:'',bank_id:props.bank.id})
    const [errorMessage,setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.holder_name.length > 0 && inputs.account_number.length > 0

    const dispatch = useDispatch()
    const response = useSelector(state=>state.authReducer.bankReducer.setAccounResponse)
    const classes = bankStyle()

    useEffect(()=>{
        if(response.status===true){
            setLoading(false)
            setFinished(false)
            setSubmitted(false)
        }

        if(props.edit===true){
            inputs.account_number=props.form.account_number
            inputs.holder_name = props.form.holder_name
        }
    })

    const  handleSubmit = ()=>{
        setLoading(true)
        setSubmitted(true)
        dispatch(store(`${API_URL}bank_account`,inputs,SET_ACCOUNT))
    }
    return(
        <ValidatorForm onSubmit={handleSubmit} className={classes.form}>
               <Typography style={{color:green[500]}}>
                   {response.message}
               </Typography>
                <TextValidator
                className={classes.text_input}
                label={'Account number'}
                onChange={handleInputChange}
                name="account_number"
                type='text'
                value={inputs.account_number}
                validators={['required']}
                errorMessages={['Please enter account number']}
                />

                <TextValidator
                className={classes.text_input}
                label={'Account holder name'}
                onChange={handleInputChange}
                name="holder_name"
                type='text'
                value={inputs.holder_name}
                validators={['required']}
                errorMessages={['Please enter account holder name']}
                />

                    <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={'Set account'}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                'Set account'
                            }
                    </LoadingButton>
        </ValidatorForm>
    )
}

export default SetAccount