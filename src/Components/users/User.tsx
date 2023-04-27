import s from "./users.module.css";
import userPhoto from "../../aseets/image/user.png";
import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


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


    return <div>
<span>
   <div>
        <NavLink to={'/profile/' + user.id}>
               <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={s.userPhoto}/>
        </NavLink>

    </div>
</span>
        <span>
    {user.followed
        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            unfollowThunk(user.id)

        }}>Unfollow</button>
        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            followThunk(user.id)
        }}>Follow</button>
    }
</span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
    </div>
}

