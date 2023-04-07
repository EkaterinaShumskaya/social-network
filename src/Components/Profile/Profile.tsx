import React from 'react';
import { MyPostsContainer } from './My posts/MyPostsContainer';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePropsType} from "./ProfileContainer";




export const Profile = (props:ProfilePropsType) => {
    return (

        <div>
            <ProfileInfo {...props} profile={props.profile} status={props.status} updateUserStatusThunk={props.updateUserStatusThunk}/>
            <MyPostsContainer />
        </div>
    );
};
