import React from 'react';
import {loginThunk} from "../../redux/authReducer";
import {useAppDispatch, useAppSelector} from "../../redux/reduxStore";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import s from './Login.module.css'
import {Redirect} from "react-router-dom";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean,
    captchaUrl?: string | null
}

export const Login = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captchaUrl: ''
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

    return <div className='app-wrapper-content'>
        <Grid container justifyContent={'center'}>
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

                            {captchaUrl && (
                                <>
                                    <img src={captchaUrl} alt="captcha"/>
                                    <TextField
                                        type="text"
                                        label="Enter symbols from image"
                                        margin="normal"
                                        {...formik.getFieldProps('captchaUrl')}
                                    />

                                </>
                            )}

                            <button className={s.button}>Login</button>
                        </FormGroup>
                    </form>

                </FormControl>
            </Grid>
        </Grid>
    </div>

}