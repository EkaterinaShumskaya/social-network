import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {RootActions} from "./ActionType";
import {reducer as FormReducer} from "redux-form";
import {appReducer} from "./appReducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType=void >=ThunkAction <
    ReturnType,
    AppStateType,
    unknown,
    RootActions
    >

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth:authReducer,
    form:FormReducer,
    app:appReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))