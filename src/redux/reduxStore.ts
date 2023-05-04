import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootActions} from "./ActionType";
import {reducer as FormReducer} from "redux-form";
import {appReducer} from "./appReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth:authReducer,
    form:FormReducer,
    app:appReducer

})


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
// export const store =legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)
// ));


export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))


export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType=void >=ThunkAction <
    ReturnType,
    AppStateType,
    unknown,
    RootActions
>


export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector