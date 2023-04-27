import {authAPI} from "../api/api";
import {AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";
import {getAuthThunk} from "./authReducer";


export type InitialStateType = {
    initialized: boolean,

}

const initialState: InitialStateType = {
    initialized: false,

}

export type AppActions = ReturnType<typeof initializedSuccess>
export const appReducer = (state = initialState, action: AppActions): InitialStateType => {

    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: "INITIALIZED-SUCCESS",
    } as const
}


export const initializeAppThunk = (): AppThunk => {
    return async (dispatch) => {
        const promise = dispatch(getAuthThunk());
        await Promise.all([promise])
        dispatch(initializedSuccess())

    }
}







