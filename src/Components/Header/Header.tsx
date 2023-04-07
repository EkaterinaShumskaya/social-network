import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";


export const Header = (props:MapStateToPropsType) => {
    return (

            <header className={s.header}>
                <img src = "https://i.pinimg.com/originals/da/45/45/da45450257dcfc66dc72ad9e7438ee34.png"/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login
                       : <NavLink to={'/login'}>Login</NavLink>
                    }

                </div>
            </header>

    );
};

