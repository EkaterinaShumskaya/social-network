import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../FormsControls/FormsControls.module.css";
import {Input} from "../FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxStore";


type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type PropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void,
    isAuth: boolean
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={Input}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
export const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }

}
export const LoginContainer = connect(mapStateToProps, {loginThunk,})(Login)