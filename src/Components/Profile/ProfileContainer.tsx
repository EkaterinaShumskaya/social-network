import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {
    getUserProfileThunk,
    getUserStatusThunk,
    ProfileResponseType, savePhotoThunk, saveProfile,
    updateUserStatusThunk
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileDataFormDataType} from "./ProfileDataForm/ProfileDataForm";


type PathParamsType = {
    userId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type MapStateToPropsType = {
    profile: ProfileResponseType,
    status: string,
    authorizedUsersId: number,
    isAuth: boolean,
    isOwner: boolean,

}

type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getUserStatusThunk: (userId: number) => void
    updateUserStatusThunk: (status: string) => void
    savePhotoThunk: (file: File) => void
    saveProfile: (data: ProfileDataFormDataType) => void


}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component <PropsType> {

    refreshProfile() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.authorizedUsersId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile} status={this.props.status}
                         isOwner={!this.props.match.params.userId}
                         updateUserStatusThunk={this.props.updateUserStatusThunk}
                         savePhotoThunk={this.props.savePhotoThunk}
                         saveProfile={this.props.saveProfile}
                />
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUsersId: state.auth.data?.id,
        isAuth: state.auth.isAuth
    }
}


// const WithUrlDataContainerComponent = withRouter(ProfileC)
//
// export const ProfileContainer = WithAuthRedirect(connect(mapStateToProps, {getUserProfileThunk})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileThunk,
        getUserStatusThunk,
        updateUserStatusThunk,
        savePhotoThunk,
        saveProfile
    }),
    withRouter,
)(ProfileContainer)


// if (!userId && this.props.profile) {
//     userId = this.props.profile.userId
// }