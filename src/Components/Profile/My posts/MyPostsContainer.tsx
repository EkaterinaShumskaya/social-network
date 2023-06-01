import React from 'react';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {addLikeAC, addPostAC, MyPostType, ProfileResponseType} from '../../../redux/profileReducer';
import {AppStateType} from '../../../redux/reduxStore';
import {MyPosts} from './MyPosts';


type MapStateToPropsType = {
    myposts: MyPostType[],
    profile:ProfileResponseType,
    userName:string
}

type MapDispatchToPropsType = {
    onAddPost: (newPost: string) => void
    addLike: (id: string) => void

}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        myposts: state.profilePage.myposts,
        profile:state.profilePage.profile,
        userName:state.profilePage.profile.fullName
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (newPost) => {
            dispatch(addPostAC(newPost))
        },
        addLike: (id: string) => {
            dispatch(addLikeAC(id))
        }

    }
}

export const MyPostsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)

