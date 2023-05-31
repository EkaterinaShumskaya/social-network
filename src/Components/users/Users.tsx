import React, {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import s from './users.module.css'


type PropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (page: number, pageSize?: number) => void
    followingInProgress: number[],
    followThunk: (id: number) => void,
    unfollowThunk: (id: number) => void,

}

export const Users: FC<PropsType> = ({
                                         users,
                                         pageSize,
                                         totalUsersCount,
                                         onPageChanged,
                                         followThunk,
                                         unfollowThunk,
                                         followingInProgress,
                                         currentPage
                                     }) => {


    return <div className='app-wrapper-content'>
        <div className={s.usersContainer}>
            <div className={s.sidebar}>
            </div>
            <div className={s.usersCards}>
                <Paginator currentPage={currentPage}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}
                           onPageChanged={onPageChanged}/>

                {users.map(u => <User user={u}
                                      followingInProgress={followingInProgress}
                                      followThunk={followThunk}
                                      unfollowThunk={unfollowThunk} key={u.id}
                />)}
            </div>
        </div>

    </div>
}