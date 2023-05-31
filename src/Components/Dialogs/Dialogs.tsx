import React from 'react';
import {DialogItem,} from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import {DialogsPropsType} from './DialogsContainer';
import {Message} from './Message/Message';
import {AddMessageFormRedux, FormMessageType} from "../../Form/AddMessageForm";
import {useDispatch} from "react-redux";
import {reset} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {


    const messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}
                                                                          avatar={m.avatar}/>)
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)

    const dispatch = useDispatch()

    const addNewMessage = (values: FormMessageType) => {
        props.addMessage(values.newMessageBody)
        dispatch(reset('dialogAddMessageForm'))
    }

    return (
        <div className={'app-wrapper-content'}>
            <div className={s.dialogsContainer}>
                <div className={s.sidebar}>

                </div>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {dialogsElements}
                    </div>
                    <div className={s.dialogsMessages}>
                        {messagesElements}
                    </div>
                    <div className={s.addDialogContainer}>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

