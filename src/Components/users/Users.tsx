import s from "./users.module.css";
import userPhoto from "../../aseets/image/user.png";
import React from "react";
import { UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[],
    followThunk:(id:number)=>void,
    unfollowThunk:(id:number)=>void

}

export const Users = (props: PropsType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>

            })}
        </div>

        {props.users.map(u => <div key={u.id}>
<span>
   <div>
        <NavLink to={'/profile/' + u.id}>
               <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
        </NavLink>

    </div>
</span>
            <span>
    {u.followed
        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
            props.unfollowThunk(u.id)
            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
            //     withCredentials:true,
            //     headers: {
            //         "API-KEY":"93737c14-24ae-4d1e-8775-8b39d3e9c4bc"
            //     }
            // })
            //     .then(response => {
            //         if (response.data.resultCode === 0) {
            //             props.unfollow(u.id)
            //         }
            //
            //     })

        }}>Unfollow</button>
        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
            props.followThunk(u.id)
        }}>Follow</button>
    }
</span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>
}