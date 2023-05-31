import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from "./reduxStore";
import {LoginType} from "../Components/Login/Login";
import {setAppStatusAC} from "./appReducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";


export type DataResponseType = {
    id: number | null,
    email: string,
    login: string,

}

export type InitialStateType = {
    data: DataResponseType,
    isAuth: boolean,
    captchaUrl: string | null

}

const initialState: InitialStateType = {
    data: {
        id: null,
        email: '',
        login: '',
    },
    isAuth: false,
    captchaUrl: null

}

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>
export type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>
export type AuthActions = setAuthUserDataType | getCaptchaUrlSuccessType

export const authReducer = (state = initialState, action: AuthActions): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, data: action.data, isAuth: action.isAuth}
        }
        case "GET-CAPTCHA-URL-SUCCESS": {
            return {...state, captchaUrl: action.captchaUrl}
        }
        default:
            return state
    }
}


export const setAuthUserData = (data: DataResponseType, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        data, isAuth
    } as const
}

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: "GET-CAPTCHA-URL-SUCCESS",
        captchaUrl
    } as const
}


export const getAuthThunk = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await authAPI.getAuth();
            if (response.data.resultCode === 0) {
                const {id, email, login, isAuth} = response.data.data;
                dispatch(setAuthUserData({id, email, login}, true))
                dispatch(setAppStatusAC('succeeded'));
            } else {
                handleServerAppError(response.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }

    }
}

export const loginThunk = (data: LoginType): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await authAPI.getLogin(data);
            if (response.data.resultCode === 0) {
                dispatch(getAuthThunk())
            } else if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

export const loginOutThunk = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await authAPI.getLoginOut();
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData({id: null, email: '', login: ''}, false))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }
    }
}

export const getCaptchaUrl = (): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await securityAPI.getCaptcha();
            const captchaUrl = response.data.url
            dispatch(getCaptchaUrlSuccess(captchaUrl))
            dispatch(setAppStatusAC('succeeded'))
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }
    }

}






