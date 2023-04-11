import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "93737c14-24ae-4d1e-8775-8b39d3e9c4bc"
        }
    }
)

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
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
    }
}


export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    getLogin(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    getLoginOut() {
        return instance.delete(`auth/login`)
    }
}

