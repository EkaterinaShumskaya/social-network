import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Setting';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/users/UsersContainer";


const App = () => {


    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={()=><Login/>}/>


                </div>

            </div>
        </BrowserRouter>)
};


export default App;
