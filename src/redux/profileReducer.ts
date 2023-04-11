import {profileAPI, userAPI} from "../api/api";
import {AppThunk} from "./reduxStore";

export type ProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string,
        large: string
    }

}

export type profilePageType = {
    myposts: MyPostType[],
    profile: ProfileResponseType | null,
    status: string
}

export type MyPostType = {
    id: number
    message: string
    likesCount: number
}


const initState: profilePageType = {
    myposts: [
        {id: 1, message: "Hi,how are you?", likesCount: 12},
        {id: 2, message: "How are you", likesCount: 13},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: profilePageType = initState, action: ProfileActions): profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: 3, message: action.newPost, likesCount: 0}
            return {...state, myposts: [...state.myposts, newPost]}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default: {
            return state
        }
    }

}
export const addPostAC = (newPost:string) => {
    return {
        type: "ADD-POST",
        newPost
    } as const
}


export const setUserProfile = (profile: ProfileResponseType | null) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
type setStatusType = ReturnType<typeof setStatus>
type addPostACType = ReturnType<typeof addPostAC>
type setUserProfileType = ReturnType<typeof setUserProfile>

export type ProfileActions=setStatusType | addPostACType | setUserProfileType

export const getUserProfileThunk = (userId: string):AppThunk => {
    return (dispatch) => {
        userAPI.getUsersProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatusThunk = (userId: string):AppThunk => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateUserStatusThunk = (status: string):AppThunk => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}