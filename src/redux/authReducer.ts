import {authAPI} from "../api/api";
import {AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {LoginType} from "../Components/Login/Login";


export type DataResponseType = {
    id: number,
    email: string,
    login: string,

}

export type InitialStateType = {
    data: DataResponseType | null,
    isAuth: boolean

}

const initialState: InitialStateType = {
    data: null,
    isAuth: false,

}

export type AuthActions = ReturnType<typeof setAuthUserData>
export const authReducer = (state = initialState, action: AuthActions): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, data: action.data, isAuth: action.isAuth}
        }
        default:
            return state
    }
}


export const setAuthUserData = (data: DataResponseType | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        data, isAuth
    } as const
}


export const getAuthThunk = (): AppThunk => {
    return async (dispatch) => {
        const response = await authAPI.getAuth();
        if (response.data.resultCode === 0) {
            const {id, email, login, isAuth} = response.data.data;
            dispatch(setAuthUserData({id, email, login}, true));
        }
    }
}

export const loginThunk = (data:LoginType): AppThunk => {
    return async (dispatch) => {
        const response = await authAPI.getLogin(data);
        if (response.data.resultCode === 0) {
            dispatch(getAuthThunk());
        } else {
            const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}));
        }
    }
}

export const loginOutThunk = (): AppThunk => {
    return async (dispatch) => {
        const response = await authAPI.getLoginOut();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, false));
        }
    }
}






