import React from 'react';
import s from './Message.module.css'
import {MessageType} from "../../../redux/dialogsReducer";




export const Message = (props: MessageType) => {
  return (
      <div className={s.messageContainer}>
          <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
        <div className={s.messageBox}>
          <span className={s.message}>{props.message}</span>
        </div>
      </div>
  )
}
