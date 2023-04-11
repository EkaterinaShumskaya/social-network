import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Setting';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LoginContainer} from "./Components/Login/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/appReducer";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./Components/common/Preloader/Preloader";


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
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
                            <Route path={'/login'} render={() => <LoginContainer/>}/>
                        </div>
                    </div>
        )

    };

}


export type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeAppThunk: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeAppThunk}),
    withRouter
)(App)
