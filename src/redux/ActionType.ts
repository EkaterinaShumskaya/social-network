import {
    followACType,
    setCurrentPageACType,
    setTotalUsersCountACType,
    setUsersACType, toggleIsFetchingACType, toggleIsFollowingProgressACType,
    unfollowACType
} from "./usersReducer";
import {
    addPostACType,
    setStatusType,
    setUserProfileType,
    updateNewPostsACType
} from "./profileReducer";
import {addMessageACType, updateNewMessagesACType} from "./dialogsReducer";
import {setUserDataType} from "./authReducer";

export type ActionType = addPostACType | updateNewPostsACType | addMessageACType |
    updateNewMessagesACType | followACType | unfollowACType | setUsersACType | setCurrentPageACType
    | setTotalUsersCountACType | toggleIsFetchingACType | setUserProfileType | setUserDataType | setStatusType
    | toggleIsFollowingProgressACType


// type addPostACType = ReturnType<typeof addPostAC>
// type updateNewPostsACType = ReturnType<typeof updateNewPostsAC>
// type addMessageACType = ReturnType<typeof addMessageAC>
// type updateNewMessagesACType = ReturnType<typeof updateNewMessagesAC>