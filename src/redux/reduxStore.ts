import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {ActionType} from "./ActionType";
import {reducer as FormReducer} from "redux-form";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType=void >=ThunkAction <
    ReturnType,
    AppStateType,
    unknown,
    ActionType
    >

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth:authReducer,
    form:FormReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))