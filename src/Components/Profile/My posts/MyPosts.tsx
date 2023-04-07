import React, { useState } from 'react';
import s from './MyPosts.module.css'
import { MyPostsPropsType } from './MyPostsContainer';
import { Post } from './Post/Post';


// export type PropsType = {
//     addPost:()=>void
//     myposts: MyPostsPropsType[]
//     newPosts:string
//     updateNewPosts:(text:string)=>void
// }



export const MyPosts = (props: MyPostsPropsType) => {
    
    let postsElements = props.myposts.map(p => <Post key={p.id} id={p.id}  message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
   

let onAddPost=()=>{
       props.onAddPost()
 
}

let onPostChange=()=>{
    let text = newPostElement.current!.value
   props.onPostChange(text)

}

    return <div>
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPosts}/> 
                <div><button onClick={onAddPost}>Add post</button></div>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}

        </div>

    </div>

};



