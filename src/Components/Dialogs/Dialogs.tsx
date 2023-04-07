import React, { ChangeEvent } from 'react';
import { DialogItem, } from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import { DialogsPropsType } from './DialogsContainer';
import { Message } from './Message/Message';
import {Redirect} from "react-router-dom";


// type PropsType={
//   addMessage:()=>void
//   updateNewMessages:(text:string)=>void
//   dialogsPage: dialogsPageType

 
// }

export const Dialogs = (props:DialogsPropsType) => {

 
let messagesElements=props.dialogsPage.messages.map(m=> <Message id= {m.id} message={m.message} />)
let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} /> )
  

let addMessage=()=>{
    props.addMessage()
 
}
let onMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    let text = e.target.value
props.updateNewMessages(text)
};


return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea value={props.dialogsPage.newMessages} onChange={onMessageChange} placeholder="Enter your message" /> 
                <div><button onClick={addMessage}>Send</button></div>

      </div>
    </div>
  )
}