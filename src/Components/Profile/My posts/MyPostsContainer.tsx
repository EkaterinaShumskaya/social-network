import React, {useState} from 'react';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {addPostAC, MyPostType, updateNewPostsAC} from '../../../redux/profileReducer';
import {AppStateType} from '../../../redux/reduxStore';
import {MyPosts} from './MyPosts';


// export type PropsType = {
//     profilePage: profilePageType
//     dispatch: (action: ActionType) => void

// }


// export const MyPostsContainer = (props: PropsType) => {


//     let onAddPost = () => {
//         props.dispatch(addPostAC())
//     }

//     let onPostChange = (text: string) => {
//         props.dispatch(updateNewPostsAC(text))

//     }

//     return (<MyPosts  updateNewPosts={onPostChange}
//         addPost={onAddPost}
//         myposts={props.profilePage.myposts}
//         newPosts={props.profilePage.newPosts}
//     />)

// };


type MapStateToPropsType = {
    myposts: MyPostType[]
    newPosts: string
}

type MapDispatchToPropsType = {
    onAddPost: () => void
    onPostChange: (text: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        myposts: state.profilePage.myposts,
        newPosts: state.profilePage.newPosts
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostsAC(text))
        }

    }
}

export const MyPostsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(MyPosts)

