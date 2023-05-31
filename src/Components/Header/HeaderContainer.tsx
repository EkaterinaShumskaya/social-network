import React from "react";
import {Header} from "./Header";
import {getAuthThunk, loginOutThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


export type MapStateToPropsType = {
    isAuth: boolean,
    login?: string
}

type MapDispatchToPropsType = {
    getAuthThunk: () => void
    loginOutThunk: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data?.login,
    }
}

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}


export default connect(mapStateToProps, {getAuthThunk, loginOutThunk})(HeaderContainer)