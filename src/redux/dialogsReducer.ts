export type dialogsPageType = {
    messages: MessageType[]
    dialogs: DialogItemType[]
}
export type MessageType = {
    id: number,
    message: string,
    avatar?: string
}
export type DialogItemType = {
    id: number
    name: string
    avatar: string
}


const initState: dialogsPageType = {
    messages: [
        {
            id: 1,
            message: "Hello",
            avatar: 'https://flyclipart.com/thumb2/avatar-png-high-quality-image-png-arts-518363.png'
        },
        {
            id: 2,
            message: "How are you",
            avatar: 'https://flyclipart.com/thumb2/avatar-png-high-quality-image-png-arts-518363.png'
        },
        {
            id: 3,
            message: "I am fine",
            avatar: 'https://flyclipart.com/thumb2/avatar-png-high-quality-image-png-arts-518363.png'
        },
        {
            id: 4,
            message: "Hello",
            avatar: 'https://flyclipart.com/thumb2/avatar-png-high-quality-image-png-arts-518363.png'
        },
    ],
    dialogs: [
        {
            id: 1,
            name: "Katya",
            avatar: 'https://flyclipart.com/thumb2/avatar-png-high-quality-image-png-arts-518363.png'
        },
        {
            id: 2,
            name: "Ilya",
            avatar: 'https://w7.pngwing.com/pngs/799/987/png-transparent-computer-icons-avatar-social-media-blog-font-awesome-avatar-heroes-computer-wallpaper-social-media.png'
        },
        {
            id: 5,
            name: "Vitya",
            avatar: "https://w7.pngwing.com/pngs/812/462/png-transparent-account-avatar-profile-user-avatars-icon.png"
        }
    ],

}
export type DialogsActions = ReturnType<typeof addMessageAC>
export const dialogsReducer = (state = initState, action: DialogsActions): dialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {id: 5, message: action.newMessageBody}
            const copyState = {
                ...state,
                messages: [...state.messages, newMessage]
            }
            return copyState
        }
        default: {
            return state
        }
    }
}

export const addMessageAC = (newMessageBody: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessageBody
    } as const


}
