import React from "react";
import s from './Paginator.module.css'



type PropsType = {
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void


}

export const Paginator = (props: PropsType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ''}
                         onClick={(event) => {
                             props.onPageChanged(p)
                         }}>{p}</span>

        })}
    </div>

}