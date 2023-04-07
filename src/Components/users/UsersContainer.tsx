import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {
    follow, followThunk, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow, unfollowThunk,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";



type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followThunk:(id:number)=>void,
    unfollowThunk:(id:number)=>void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/>
                : null}
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   followThunk={this.props.followThunk}
                   unfollowThunk={this.props.unfollowThunk}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        followThunk,
        unfollowThunk
    }),
    WithAuthRedirect
)(UsersContainer)