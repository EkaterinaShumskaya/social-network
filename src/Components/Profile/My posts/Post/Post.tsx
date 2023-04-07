import { type } from 'os';
import React from 'react';
import s from './Post.module.css'
import {MyPostType} from "../../../../redux/profileReducer";



export const Post = (props:MyPostType) => {
    return <div>
    
        <div className={s.item}>
            <img src='https://cspromogame.ru//storage/upload_images/avatars/3884.jpg'/>
            {props.message}
            <div>{props.likesCount}</div>
            </div>
      
    </div>
            
};

