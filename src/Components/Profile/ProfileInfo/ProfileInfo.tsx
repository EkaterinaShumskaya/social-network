import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../aseets/image/user.png";
import {ProfileResponseType} from "../../../redux/profileReducer";
import {ProfileDataForm, ProfileDataFormDataType} from "../ProfileDataForm/ProfileDataForm";
import {Button, IconButton, Tooltip} from "@material-ui/core";
import {ProfileData} from "../ProfileData/ProfileData";
import {Photo} from "@material-ui/icons";


type ProfileInfoPropsType = {
    profile: ProfileResponseType
    isOwner: boolean,
    savePhotoThunk: (file: File) => void
    saveProfile: (data: ProfileDataFormDataType) => void
    status: string
    updateUserStatusThunk: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (data: ProfileDataFormDataType) => {
        props.saveProfile(data)
        setEditMode(false)
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhotoThunk(e.target.files[0])
        }
    }
    return (

        <div>
            <div className={s.mainContainer}>
                <div className={s.container}>
                    <div className={s.avatarContainer}>
                        <img src={props.profile.photos.large || userPhoto} className={s.photo}/>
                    </div>
                    {props.isOwner &&
                        <IconButton className={s.button} component="label">
                            <Tooltip title='Change photo' arrow>
                                <Photo/>
                            </Tooltip>
                            <input
                                onChange={onMainPhotoSelected}
                                type="file"
                                hidden
                                accept="image/png, image/jpeg"
                            />
                        </IconButton>
                    }
                </div>

                <div className={s.infoContainer}>
                    <div className={s.Name}>{props.profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                    {editMode
                        ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile}/>
                        : <ProfileData profile={props.profile}/>}
                    {props.isOwner && !editMode
                        && <Button onClick={() => setEditMode(true)}
                                   variant='contained'
                                   color='primary'
                                   className={s.editButton}
                        >
                            Edit
                        </Button>}

                </div>
            </div>
        </div>
    );
};
