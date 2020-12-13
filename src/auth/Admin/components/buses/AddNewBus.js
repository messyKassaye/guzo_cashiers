import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import BusStyle from './style/BusStyle'
import React,{useState,useEffect} from 'react'
import UseForm from '../../../../commons/UseForm'
import LoadingButton from '../../../../commons/LoadingButton'
import {useDispatch,useSelector} from 'react-redux'
import {store} from '../../../state/AppAction'
import { STORE_BUS } from '../../../state/Constants'
import { API_URL } from '../../../../constants/constants'
import { Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
 const AddNewBus = ()=>{
        const classes = BusStyle()
        const {inputs,handleInputChange} = UseForm({'number':'','plate_number':''})
        const [errorMessage,setErrorMessage] = useState('');
        const [loading,setLoading] = useState(false)
        const [finished,setFinished] = useState(false)
        const [submitted,setSubmitted] = useState(false)
        const loadingEnabled = !finished && loading;
        const isEnabled = inputs.number.length > 0 && inputs.plate_number.length > 0

        const dispatch = useDispatch()
        const response = useSelector(state=>state.authReducer.busesReducer.response)

    useEffect(()=>{
        if(response.status===true){
            setLoading(false)
            setFinished(false)
            setSubmitted(false)
        }
    })
    const handleSubmit =()=>{
        setLoading(true)
        setSubmitted(true)
        dispatch(store(`${API_URL}buses`,inputs,STORE_BUS))
    }

     return(
         <div className={classes.container}>
            <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
            <Typography style={{color:green[500]}}>
                {response.message}
            </Typography>
            <TextValidator
                className={classes.text_input}
                label={'Bus number'}
                onChange={handleInputChange}
                name="number"
                type='text'
                value={inputs.number}
                validators={['required']}
                errorMessages={['Please enter bus number']}
                />

            <TextValidator
                className={classes.text_input}
                label={'Plate number'}
                onChange={handleInputChange}
                name="plate_number"
                type='text'
                value={inputs.plate_number}
                validators={['required']}
                errorMessages={['Please enter plate number']}
            />

                    <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={'Add bus'}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                'Add bus'
                            }
                    </LoadingButton>
            </ValidatorForm>
         </div>
     )
 }

 export default AddNewBus