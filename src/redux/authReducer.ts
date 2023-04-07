import {ActionType} from "./ActionType";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";


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

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, data: {...action.data}, isAuth: true}
        }
        default:
            return state
    }
}


export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {
            id,
            email,
            login
        }
    } as const
}

export const getAuthThunk=()=> {
    return (dispatch: Dispatch<ActionType>) => {
        authAPI.getAuth().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            }
        )
    }
}



export type setUserDataType = ReturnType<typeof setAuthUserData>




