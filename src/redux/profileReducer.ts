import {profileAPI, userAPI} from "../api/api";
import {AppStateType, AppThunk} from "./reduxStore";
import {ProfileDataFormDataType} from "../Components/Profile/ProfileDataForm/ProfileDataForm";
import {handleServerAppError, handleServerNetworkError} from "../utils/error-utils";
import {setAppStatusAC} from "./appReducer";
import {v1} from "uuid";


export type ProfileResponseType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
    photos: {
        small: string,
        large: string
    }

}

export type ContactsProfileType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type profilePageType = {
    myposts: MyPostType[],
    profile: ProfileResponseType,
    status: string
}

export type MyPostType = {
    id: string
    message: string
    likesCount: number
}


const initState: profilePageType = {
    myposts: [
        {id: v1(), message: "Hi,how are you?", likesCount: 0},
        {id: v1(), message: "Hello!", likesCount: 10},
        {id: v1(), message: "It is nice", likesCount: 12},
        {id: v1(), message: "I am good", likesCount: 8},
        {id: v1(), message: "How are you?", likesCount: 14},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ""

}

export const profileReducer = (state: profilePageType = initState, action: ProfileActions): profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {id: v1(), message: action.newPost, likesCount: 0}
            return {...state, myposts: [...state.myposts, newPost]}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "DELETE-POST": {
            return {...state, myposts: state.myposts.filter((el) => el.id !== action.postId)}
        }
        case "SAVE-PHOTOS-SUCCESS": {
            // return {...state,profile: {...state.profile,photos:action.photos}}
            return {...state, profile: {...state.profile, photos: action.photos}}

        }
        case "ADD-LIKE": {
            return {
                ...state,
                myposts: state.myposts.map((el) => el.id === action.id ? {...el, likesCount: el.likesCount + 1} : el)
            }
        }
        default: {
            return state
        }
    }

}
export const addPostAC = (newPost: string) => {
    return {
        type: "ADD-POST",
        newPost
    } as const
}

export const addLikeAC = (id: string) => {
    return {
        type: "ADD-LIKE",
        id
    } as const
}


export const setUserProfile = (profile: ProfileResponseType) => {
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

export const deletePost = (postId: string) => {
    return {
        type: "DELETE-POST",
        postId
    } as const
}
export const savePhotoSuccess = (photos: { small: string, large: string }) => {
    return {
        type: "SAVE-PHOTOS-SUCCESS",
        photos
    } as const
}

type setStatusType = ReturnType<typeof setStatus>
type addPostACType = ReturnType<typeof addPostAC>
type setUserProfileType = ReturnType<typeof setUserProfile>
type deletePostType = ReturnType<typeof deletePost>
type savePhotoSuccessType = ReturnType<typeof savePhotoSuccess>
type addLikeACType = ReturnType<typeof addLikeAC>

export type ProfileActions =
    setStatusType
    | addPostACType
    | setUserProfileType
    | deletePostType
    | savePhotoSuccessType
    | addLikeACType

export const getUserProfileThunk = (userId: string): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await userAPI.getUsersProfile(userId)
            dispatch(setUserProfile(response.data))
            dispatch(setAppStatusAC('succeeded'))
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }
    }

}

export const getUserStatusThunk = (userId: string): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data))
            dispatch(setAppStatusAC('succeeded'))
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }
    }

}


export const updateUserStatusThunk = (status: string): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)

        }
    }
}

export const savePhotoThunk = (file: File): AppThunk => {
    return async (dispatch) => {
        try {
            dispatch(setAppStatusAC('loading'))
            const response = await profileAPI.savePhoto(file)
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)

        }
    }
}

export const saveProfile = (profile: ProfileDataFormDataType): AppThunk => async (dispatch, getState: () => AppStateType) => {
    try {
        dispatch(setAppStatusAC('loading'))
        const userId = getState().auth.data.id;
        if (userId !== null && userId !== undefined) {
            const response = await profileAPI.saveProfile(profile)
            if (response.data.resultCode === 0) {
                dispatch(getUserProfileThunk(userId.toString()))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(response.data, dispatch)
            }
        }
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }

}

