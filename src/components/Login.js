import { Typography } from '@material-ui/core'
import { useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import LoadingButton from '../commons/LoadingButton'
import useStyles from '../styles/homeStyle'
import UseForm from '../commons/UseForm'
import {useTranslation} from 'react-i18next'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import { API_AUTH_URL } from '../constants/constants'
import { set, setRole } from '../TokenService'
export const Login =()=>{
    const classes = useStyles() 
    const {inputs, handleInputChange} = UseForm({phone:'',password:''});
    const {t} = useTranslation() 
    const history  =useHistory()

    const [errorMessage,setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.phone.length > 0 && inputs.password.length > 0


   const  handleSubmit = ()=>{
        setLoading(true)
        setSubmitted(true)


        axios.post(`${API_AUTH_URL}login`,inputs)
        .then(response=>response.data)
        .then(res=>{
            set(res.token)
            setRole(JSON.stringify(res.role))
            history.push('/auth')
         })
         .catch(onerror=>{
            setLoading(false)
            setFinished(false)
            setSubmitted(false)
    
            if(!onerror.response){
                setErrorMessage('something')
            }else {
                let code = onerror.response.status
                if(code===403){
                    setErrorMessage('incorrect')
                }
            }
         })
    }  
    return (
            <ValidatorForm className={classes.loginContainer} onSubmit={handleSubmit} >
                        {
                            errorMessage!==''
                            ?
                                (
                                    <Typography component='p' color={'secondary'} style={{margin:10}}>
                                    {t(`home.error.${errorMessage}`)}
                                </Typography>
                                )
                            :
                                (null)
                        }
                    <TextValidator
                        className={classes.text_input}
                        label={t('home.phone')}
                        onChange={handleInputChange}
                        name="phone"
                        type='phone'
                        value={inputs.phone}
                        validators={['required']}
                        errorMessages={[t('home.error.phone')]}
                    />

                    <TextValidator
                    className={classes.text_input}
                    label={t('home.password')}
                    name="password"
                    type='password'
                    onChange={handleInputChange}
                    value={inputs.password}
                    validators={['required']}
                    errorMessages={[t('home.error.password')]}
                    />               
                    <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={t('home.login')}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                t('home.login')
                            }
                    </LoadingButton>
            </ValidatorForm>
    )
}

export default Login