import React from 'react';
import {MyPostsContainer} from './My posts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePropsType} from "./ProfileContainer";
import s from './Profile.module.css'


export const Profile = (props: ProfilePropsType) => {
    return (

        <div className={'content'}>
            <div>
                <img className={s.headerContent} alt='big content'
                     src='https://themified.com/friend-finder/images/covers/1.jpg'/>
            </div>
            <div className={s.containerInfoAndPosts}>
                <div className={s.containerInfo}>

                    <ProfileInfo {...props} saveProfile={props.saveProfile}
                                 savePhotoThunk={props.savePhotoThunk}
                                 isOwner={props.isOwner}
                                 profile={props.profile}
                                 status={props.status}
                                 updateUserStatusThunk={props.updateUserStatusThunk}/>
                </div>
                <div className={s.containerPosts}>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    );
};
