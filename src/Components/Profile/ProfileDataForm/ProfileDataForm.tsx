import React, {FC} from "react";
import {useFormik} from "formik";
import {Button} from "@material-ui/core";
import {ProfileResponseType, saveProfile} from "../../../redux/profileReducer";
import {useAppDispatch} from "../../../redux/reduxStore";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import s from './ProfileDataForm.module.css'

export type ProfileDataFormDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PropsType = {
    onSubmit: (data: ProfileDataFormDataType) => void
    profile: ProfileResponseType
}

type FormikErrorType = {
    fullName?: string
    aboutMe?: string
    lookingForAJobDescription?: string


}

export const ProfileDataForm: FC<PropsType> = (props) => {
    const dispatch = useAppDispatch()
    const model = {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
    };
    const formik = useFormik({
        initialValues: {
            fullName: '',
            aboutMe: '',
            lookingForAJob: false,
            lookingForAJobDescription: '',
            ...model,
        },
        validate: (values) => {
            let errors: FormikErrorType = {}
            if (!values.fullName) {
                errors.fullName = 'Required'
            }
            if (!values.aboutMe) {
                errors.aboutMe = 'Required'
            }
            if (!values.lookingForAJobDescription) {
                errors.lookingForAJobDescription = 'Required'
            }

            return errors
        },
        onSubmit: (values: ProfileDataFormDataType) => {
            dispatch(saveProfile(values))
            formik.resetForm()
        },
    });
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <TextField
                            type="fullName"
                            label="fullName"
                            margin="normal"
                            {...formik.getFieldProps('fullName')}
                        />
                        {formik.touched.fullName && formik.errors.fullName &&
                            <div style={{color: 'red'}}> {formik.errors.fullName}</div>}
                        <TextField type="aboutMe"
                                   label="aboutMe"
                                   margin="normal"
                                   {...formik.getFieldProps('aboutMe')}
                        />
                        {formik.touched.aboutMe && formik.errors.aboutMe &&
                            <div style={{color: 'red'}}> {formik.errors.aboutMe}</div>}

                        <FormControlLabel label={'lookingForAJob'} control={
                            <Checkbox
                                checked={formik.values.lookingForAJob}  {...formik.getFieldProps('lookingForAJob')}
                            />}/>
                        <TextField type="lookingForAJobDescription"
                                   label="lookingForAJobDescription"
                                   margin="normal"
                                   {...formik.getFieldProps('lookingForAJobDescription')}
                        />
                        {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                            <div style={{color: 'red'}}> {formik.errors.lookingForAJobDescription}</div>}
                        {Object.keys(model).map((key) => (
                            <div key={key}>
                                <TextField
                                    type="text"
                                    label={key}
                                    margin="normal"
                                    {...formik.getFieldProps(key)}
                                />

                            </div>
                        ))}

                        <Button type={'submit'} variant={'contained'} color={'primary'} className={s.button}>
                            Save
                        </Button>
                    </FormGroup>
                </form>

            </FormControl>
        </Grid>
    </Grid>
};

