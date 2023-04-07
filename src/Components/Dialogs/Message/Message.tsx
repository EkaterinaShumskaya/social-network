import { message } from 'antd';
import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/dialogsReducer";




export const Message = (props: MessageType) => {
  return (
    <div>
    
    <div className={s.message}> {props.message}</div>
   
    </div>
  )
}
