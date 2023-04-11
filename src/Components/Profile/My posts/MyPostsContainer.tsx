import React, {useState} from 'react';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {addPostAC, MyPostType} from '../../../redux/profileReducer';
import {AppStateType} from '../../../redux/reduxStore';
import {MyPosts} from './MyPosts';


type MapStateToPropsType = {
    myposts: MyPostType[]
}

type MapDispatchToPropsType = {
    onAddPost: (newPost:string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        myposts: state.profilePage.myposts,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (newPost) => {
            dispatch(addPostAC(newPost))
        },

    }
}

export const MyPostsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)

