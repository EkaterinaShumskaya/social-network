import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    getUserProfileThunk,
    getUserStatusThunk,
    ProfileResponseType,
    updateUserStatusThunk
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type MapStateToPropsType = {
    profile: ProfileResponseType | null,
    status: string,
    authorizedUsersId:number,
    isAuth:boolean
}

type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getUserStatusThunk: (userId: number) => void
    updateUserStatusThunk: (status: string) => void

}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUsersId
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    render() {

        return (

            <div>
                <Profile {...this.props}
                         profile={this.props.profile} status={this.props.status}
                         updateUserStatusThunk={this.props.updateUserStatusThunk}/>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUsersId:state.auth.data?.id,
        isAuth: state.auth.isAuth
    }
}


// const WithUrlDataContainerComponent = withRouter(ProfileC)
//
// export const ProfileContainer = WithAuthRedirect(connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk}),
    withRouter,
)(ProfileContainer)


// if (!userId && this.props.profile) {
//     userId = this.props.profile.userId
// }