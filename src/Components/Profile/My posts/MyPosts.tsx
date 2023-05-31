import React from 'react';
import s from './MyPosts.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import {Post} from './Post/Post';
import {AddPostFormRedux, FormPostType} from "../../../Form/AddPostForm";
import {useDispatch} from "react-redux";
import {reset} from "redux-form";


export const MyPosts = React.memo((props: MyPostsPropsType) => {

    const postsElements = props.myposts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                       likesCount={p.likesCount} addLike={props.addLike}/>)

    const dispatch = useDispatch()
    const addNewPost = (value: FormPostType) => {
        props.onAddPost(value.newPost)
        dispatch(reset('profileAddNewPostForm'))
    }

    return <div>
        <div className={s.postsBlock}>
            <div className={s.postContainer}>
                <h3 className={s.title}>My post</h3>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    </div>


});



