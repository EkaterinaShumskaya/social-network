import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../Components/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../utils/validators/validators";



export type FormMessageType={
    newMessageBody:string
}
const maxLength100=maxLengthCreator(100)
export const AddMessageForm:React.FC<InjectedFormProps<FormMessageType>> =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newMessageBody'} validate={[requiredField,maxLength100]} placeholder={'Enter your message'}/>
            <div><button>Send</button></div>
        </form>
    )
}

export const AddMessageFormRedux=reduxForm <FormMessageType> ({form:'dialogAddMessageForm'})(AddMessageForm)