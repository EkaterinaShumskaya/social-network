import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={(isActive) => isActive ? s.active : s.a}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={(isActive) => isActive ? s.active : s.a}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={(isActive) => isActive ? s.active : s.a}>Users</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/news' className={(isActive) => isActive ? s.active : s.a}>News</NavLink>*/}

            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/music' className={(isActive) => isActive ? s.active : s.a}>Music</NavLink>*/}

            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to='/settings' className={(isActive) => isActive ? s.active : s.a}>Settings</NavLink>*/}


            {/*</div>*/}

        </nav>

    );
};

