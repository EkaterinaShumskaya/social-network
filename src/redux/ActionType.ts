import {
    UsersActions
} from "./usersReducer";
import {
    ProfileActions,
} from "./profileReducer";
import {DialogsActions} from "./dialogsReducer";
import {AuthActions} from "./authReducer";
import {FormAction} from "redux-form/lib/actions";
import {AppActions} from "./appReducer";


export type RootActions = AuthActions | DialogsActions | ProfileActions | UsersActions | FormAction | AppActions
