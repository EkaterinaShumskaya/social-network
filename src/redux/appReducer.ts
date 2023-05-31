import {AppThunk} from "./reduxStore";
import {getAuthThunk} from "./authReducer";


export type InitialStateType = {
    initialized: boolean,
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
}


const initialState: InitialStateType = {
    initialized: false,
    status: 'idle',
    error: null,

}


export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "INITIALIZED-SUCCESS": {
            return {
                ...state,
                initialized: true
            }
        }
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
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

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type AppActions = ReturnType<typeof initializedSuccess>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | AppActions







