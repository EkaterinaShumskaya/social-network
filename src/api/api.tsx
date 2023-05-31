import axios from "axios";
import {LoginType} from "../Components/Login/Login";
import {ProfileDataFormDataType} from "../Components/Profile/ProfileDataForm/ProfileDataForm";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "b82a7625-d692-4a6a-b2f1-14ea19aac152"
        }
    }
)

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getUsersProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getUsersProfile(userId)
    }
}

export const profileAPI = {
    getUsersProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileDataFormDataType) {
        return instance.put(`profile`, profile)
    }
}


export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    getLogin(data: LoginType) {
        return instance.post(`auth/login`, data)
    },
    getLoginOut() {
        return instance.delete(`auth/login`)
    },
}


export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}