import {userAPI} from "../api/api";
import {AppThunk} from "./reduxStore";


export type UserType = {
    id: number,
    photos: {
        small: string,
        large: string
    }
    name: string,
    followed: boolean
    status: string
    location: {
        city: string,
        country: string
    }
}
type InitialStateType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UsersActions): InitialStateType => {

    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            console.log('4')
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USER-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            console.log('3')
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}


export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USER-COUNT",
        totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, id: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        id
    } as const
}


type followACType = ReturnType<typeof follow>
type unfollowACType = ReturnType<typeof unfollow>
type setUsersACType = ReturnType<typeof setUsers>
type  setCurrentPageACType = ReturnType<typeof setCurrentPage>
type  setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>

export type UsersActions = followACType | unfollowACType | setUsersACType | setCurrentPageACType
    | setTotalUsersCountACType | toggleIsFetchingACType | toggleIsFollowingProgressACType

export const requestUsersThunk = (page: number, pageSize: number): AppThunk => {
    console.log('1')
    return async (dispatch) => {
        console.log('2')
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        const data = await userAPI.getUsers(page, pageSize)
        console.log('5')
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}


export const followThunk = (id: number): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        const response = await userAPI.follow(id)
        if (response.data.resultCode === 0) {
            dispatch(follow(id))
        }
        dispatch(toggleIsFollowingProgress(false, id))
    }
}

export const unfollowThunk = (id: number): AppThunk => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        const response = await userAPI.unfollow(id)
        if (response.data.resultCode === 0) {
            dispatch(unfollow(id))
        }
        dispatch(toggleIsFollowingProgress(false, id))

    }
}