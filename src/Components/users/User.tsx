import s from "./User.module.css";
import userPhoto from "../../aseets/image/user.png";
import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";


type PropsType = {
    user: UserType
    followingInProgress: number[],
    followThunk: (id: number) => void,
    unfollowThunk: (id: number) => void

}

export const User: FC<PropsType> = ({
                                        user,
                                        followingInProgress,
                                        unfollowThunk,
                                        followThunk
                                    }) => {


    const setFollowHandler = () => {
        followThunk(user.id)
    }
    const setUnfollowHandler = () => {
        unfollowThunk(user.id)
    }
    const button = !user.followed
        ? <Button size='small'
                  variant='contained'
                  color='primary'
                  disabled={followingInProgress.some(id => id === user.id)}
                  onClick={setFollowHandler}>
            FOLLOW
        </Button>
        : <Button size='small'
                  variant='contained'
                  color='secondary'
                  disabled={followingInProgress.some(id => id === user.id)}
                  onClick={setUnfollowHandler}>
            UNFOLLOW
        </Button>

    return (
        <div className={s.userCardContainer}>
            <div className={s.avatarAndButton}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.avatar}
                         alt={'avatar'}
                         src={user.photos.large !== null ? user.photos.large : userPhoto}/>
                </NavLink>
                {button}
            </div>
            <div className={s.userInfo}>
                <NavLink to={'/profile/' + user.id}>
                    <div className={s.name}>{user.name}</div>
                </NavLink>
                <div>Status: {user.status}</div>
            </div>
        </div>
    )
}

