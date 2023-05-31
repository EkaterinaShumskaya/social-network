import React, {FC} from "react";
import s from './Contact.module.css'

type ContactsPropsType = {
    title: string
    link?: string
}
export const Contact: FC<ContactsPropsType> = ({title, link}) => {
    return (
        <span style={{margin: "0 15px", wordBreak: "break-word"}}>
            {title}:
            <a href={link} className={s.link}>{link}</a>
        </span>
    )
}