import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Setting';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/appReducer";
import {AppStateType} from "./redux/reduxStore";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {Login} from "./Components/Login/Login";
import {withSuspense} from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const UsersContainer=React.lazy(() => import('./Components/users/UsersContainer'))
//
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
                    <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                    <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                    <Route path={'/login'} render={() => <Login/>}/>
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
