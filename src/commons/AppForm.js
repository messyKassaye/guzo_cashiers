import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"
import UseForm from "./UseForm"
import FormStyle from './style/FormStyle'
import LoadingButton from "./LoadingButton"
import React,{useState} from 'react'
const AppForm =(props)=>{
    const {inputs,handleInputChange} = UseForm(props.inputs)
    const formArray = props.forms
    const classes = FormStyle()

    const [errorMessage,setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = false//inputs.holder_name.length > 0 && inputs.account_number.length > 0

    return(
       <div className={classes.container}>
             <ValidatorForm className={classes.form}>
            {
                formArray.map(input=>(
                    <TextValidator
                     className={classes.text_input}
                     label={input.label}
                     name={input.name}
                     type={input.type}
                     onChange={handleInputChange}
                    />
                ))
            }

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
       </div>
    )
}

export default AppForm