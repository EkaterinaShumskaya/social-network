import React from 'react';
import s from './MyPosts.module.css'
import {MyPostsPropsType} from './MyPostsContainer';
import {Post} from './Post/Post';
import {AddPostFormRedux, FormPostType} from "../../../Form/AddPostForm";


export const MyPosts = React.memo((props: MyPostsPropsType) => {

    const postsElements = props.myposts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                       likesCount={p.likesCount}/>)

    const addNewPost = (value: FormPostType) => {
        props.onAddPost(value.newPost)
    }

    return <div>
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddPostFormRedux onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {postsElements}

        </div>

    </div>

});



