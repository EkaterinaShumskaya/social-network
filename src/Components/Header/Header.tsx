import React from 'react';
import s from './Header.module.css'
import {Redirect} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";
import {ExitToApp} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import {Navbar} from "../Navbar/Navbar";


export const Header = (props: HeaderPropsType) => {

    return (

        <header className={s.headerContainer}>
            <div className={s.header}>
                <div className={s.logoAndTitle}>
                    <span className={s.name}>SOCIAL NETWORK</span>
                </div>
                <Navbar/>

                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div> {props.login}-
                            {/*<button onClick={props.loginOutThunk}>Log out</button>*/}
                            <IconButton onClick={props.loginOutThunk} style={{color: 'white'}}>
                                <ExitToApp/>
                            </IconButton>
                        </div>
                        : <Redirect to={'/login'}>Login</Redirect>
                    }

                </div>
            </div>
        </header>


    );
};

