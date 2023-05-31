import React from 'react';
import s from './Post.module.css'
import {FavoriteBorder} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";


type PostType = {
    message: string,
    addLike: (id: string) => void,
    id: string,
    likesCount: number
}


export const Post = (props: PostType) => {
    const onClickLikeHandler = () => {
        props.addLike(props.id)
    }

    return <div>

        <div className={s.post}>
            <div className={s.avatarAndName}>
                <div>
                    <img src='https://cspromogame.ru//storage/upload_images/avatars/3884.jpg' className={s.avatarPost}/>
                </div>
                <h5 style={{marginLeft: '5px'}}>{s.userName}</h5>
            </div>
            <span className={s.message}> {props.message}</span>
            <div className={s.likes}>
                <IconButton onClick={onClickLikeHandler} size={'small'}>
                    <FavoriteBorder color={'primary'}/>
                </IconButton>
                <span> {props.likesCount}</span>
            </div>

        </div>

    </div>

};

