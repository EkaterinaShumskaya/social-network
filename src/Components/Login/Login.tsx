import React from 'react';
import {loginThunk} from "../../redux/authReducer";
import {useAppDispatch, useAppSelector} from "../../redux/reduxStore";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import s from './Login.module.css'
import {NavLink, Redirect} from "react-router-dom";

//
//
// export type FormDataType = {
//     email: string,
//     password: string,
//     rememberMe: boolean
// }
// type PropsType = {
//     loginThunk: (email: string, password: string, rememberMe: boolean) => void,
//     isAuth: boolean
// }
//
//
// export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField]}/>
//             </div>
//             <div>
//                 <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
//                        validate={[requiredField]}/>
//             </div>
//             <div>
//                 <Field type={'checkbox'} name={'remember me'} component={Input}/> remember me
//             </div>
//             {props.error && <div className={s.formSummaryError}>
//                 {props.error}
//             </div>}
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     );
// };
// export const Login: React.FC<PropsType> = ({loginThunk, isAuth}) => {
//     const onSubmit = (formData: FormDataType) => {
//         loginThunk(formData.email, formData.password, formData.rememberMe)
//     }
//     if (isAuth) {
//         return <Redirect to={'/profile'}/>
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <LoginReduxForm onSubmit={onSubmit}/>
//         </div>
//     );
// };
// const LoginReduxForm = reduxForm<FormDataType>({
//     form: 'login'
// })(LoginForm)
//
// const mapStateToProps = (state: AppStateType) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
//
// }
// export const LoginContainer = connect(mapStateToProps, {loginThunk,})(Login)


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}
export const Login = () => {

    const dispatch = useAppDispatch()
    const isAuth =useAppSelector(state => state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            let errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Length shod be more 3 symbols'
            }

            return errors
        },
        onSubmit: values => {
            dispatch(loginThunk(values))
            formik.resetForm();
        },
    })


    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField label="Email"
                                   margin="normal"
                                   {...formik.getFieldProps('email')}
                        />

                        {formik.touched.email && formik.errors.email &&
                            <div style={{color: 'red'}}> {formik.errors.email}</div>}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password &&
                            <div style={{color: 'red'}}> {formik.errors.password}</div>}

                        <FormControlLabel label={'Remember me'} control={
                            <Checkbox checked={formik.values.rememberMe}  {...formik.getFieldProps('rememberMe')}
                            />}/>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </form>

            </FormControl>
        </Grid>
    </Grid>
}