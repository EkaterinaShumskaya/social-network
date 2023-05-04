import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {
    followThunk, requestUsersThunk,
    setCurrentPage,
    unfollowThunk,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";


type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}

type MapDispatchToPropsType = {
    requestUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk: (id: number) => void,
    unfollowThunk: (id: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsersThunk(currentPage, pageSize)
    }


    onPageChanged = (pageNumber: number, pageSize: number = 10) => {
        this.props.requestUsersThunk(pageNumber, pageSize)
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


const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setCurrentPage,
        requestUsersThunk,
        followThunk,
        unfollowThunk
    }),
)(UsersContainer)