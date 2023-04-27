import React from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type PropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[],
    followThunk: (id: number) => void,
    unfollowThunk: (id: number) => void

}

export const Users = (props: PropsType) => {


    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}/>
        <div>  {props.users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                                           followThunk={props.followThunk}
                                           unfollowThunk={props.unfollowThunk} key={u.id}
        />)}
        </div>


    </div>
}