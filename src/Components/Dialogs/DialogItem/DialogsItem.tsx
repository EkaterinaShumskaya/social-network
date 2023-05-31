import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogsItem.module.css'
import {DialogItemType} from "../../../redux/dialogsReducer";


export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialogsItems}>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
                <img className={s.avatar} src={props.avatar} alt={'avatar'}/></NavLink>
        </div>
    )
}

