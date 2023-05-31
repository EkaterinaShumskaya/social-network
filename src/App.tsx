import React from 'react';
import './App.css';
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import {News} from './Components/News/News';
import {Music} from './Components/Music/Music';
import {Settings} from './Components/Settings/Setting';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk, RequestStatusType, setAppStatusAC} from "./redux/appReducer";
import {AppStateType, store} from "./redux/reduxStore";
import {Login} from "./Components/Login/Login";
import {withSuspense} from "./HOC/withSuspense";
import {AppBar, CircularProgress, LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "./Components/ErrorSnackbar/ErrorSnackbar";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./Components/users/UsersContainer'))

//
class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeAppThunk()
    }

    render() {

        if (!this.props.initialized) {
            return <div
                style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress/>
            </div>
        }

        return (
            <>
                <AppBar position="static">
                    {this.props.status === 'loading' && <LinearProgress/>}
                </AppBar>

                <div className={'app-wrapper'}>
                    <ErrorSnackbar/>
                    <HeaderContainer/>
                    <Switch>
                        <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                        <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={withSuspense(UsersContainer)}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route exact path="/" render={withSuspense(ProfileContainer)}/>
                        <Route path='*' render={() => <div className="content" style={{
                            display: "flex",
                            alignItems: "flex-start",
                            width: "100%",
                            justifyContent: "center"
                        }}><h1>404: PAGE NOT FOUND</h1></div>}/>
                    </Switch>
                </div>
            </>
        )
    };

}


export type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export type MapStateToPropsType = {
    initialized: boolean,
    status: RequestStatusType
}

type MapDispatchToPropsType = {
    initializeAppThunk: () => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized,
        status: state.app.status
    }
}


const AppContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {initializeAppThunk, setAppStatusAC}),
    withRouter
)(App)


const MainApp = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppContainer/>
            </HashRouter>
        </Provider>
    )
}
export default MainApp
