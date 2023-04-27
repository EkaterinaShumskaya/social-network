import React from 'react';
import s from './ProfileInfo.module.css'
import { ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";



export const ProfileInfo = (props:ProfilePropsType) => {
    if (!props.profile) {
        return  <Preloader/>
    }
    return (

            <div>
                {/*<div>*/}
                {/*    <img src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614612233_137-p-fon-dlya-fotoshopa-priroda-209.jpg" className={s.pic}/>*/}
                {/*</div>*/}
                <div  className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>

                   <ProfileStatusWithHooks status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
                </div>
                <div>
                  {props.profile.fullName}
                </div>
                <div>
                   facebook: {props.profile.contacts.facebook}
                </div>
            </div>
    );
};

