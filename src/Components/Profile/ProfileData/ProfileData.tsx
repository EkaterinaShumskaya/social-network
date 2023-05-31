import s from "../Profile.module.css";
import {Contact} from "./Contact/Contact";
import React, {FC} from "react";
import {ProfileResponseType} from "../../../redux/profileReducer";

type ProfileDataPropsType = {
    profile: ProfileResponseType
}
export const ProfileData: FC<ProfileDataPropsType> = ({profile}) => {
    return (
        <div className={s.data}>
            <span> About me: {profile.aboutMe} </span>
            <span> Looking for a job: {profile.lookingForAJob ? "✅" : ""}</span>
            {profile.lookingForAJob && <span> Skills: {profile.lookingForAJobDescription}</span>}
            <span> Contacts: </span>
            {Object.entries(profile.contacts)
                .map(elem => <Contact key={elem[0]} title={elem[0]} link={elem[1]}/>)}
        </div>
    )
}