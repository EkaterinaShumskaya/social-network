import React from "react";
import {Header} from "./Header";
import {getAuthThunk} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";



export type MapStateToPropsType = {
    isAuth: boolean,
    login?: string
}

type MapDispatchToPropsType = {
    // setAuthUserData: (id: number, email: string, login: string) => void
    getAuthThunk:()=>void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthThunk()

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data?.login

    }
}


export default connect(mapStateToProps, {getAuthThunk})(HeaderContainer)