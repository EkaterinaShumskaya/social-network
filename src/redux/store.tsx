
import { addMessageAC, dialogsReducer, updateNewMessagesAC } from "./dialogsReducer"
import { addPostAC, profileReducer, updateNewPostsAC } from "./profileReducer"
import { sidebarReducer } from "./sidebarReducer"
import {follow, followACType, setUsersACType, unfollow, unfollowACType} from "./usersReducer";


//
// export type MyPostType = {
//   id: number
//   message: string
//   likesCount: number
// }
// export type MessageType = {
//   id: number,
//   message: string
// }
// export type FriendType = {
//   id: number
//   name: string
// }
//
// export type DialogItemType = {
//   id: number
//   name: string
// }
//
//
// export type profilePageType = {
//   myposts: MyPostType[]
//   newPosts: string
// }
//
// export type dialogsPageType = {
//   messages: MessageType[]
//   dialogs: DialogItemType[]
//   newMessages: string
// }
//
// export type sidebarType = {
//   friends: FriendType[]
// }
// export type StateProps = {
//   dialogsPage: dialogsPageType
//   profilePage: profilePageType
//   sidebar: sidebarType
// }
// export type StoreType = {
//   _state: StateProps
//   getState: () => StateProps
//   _rerenderEntireTree: () => void
//   subscribe: (observer: () => void) => void
//   dispatch: (action: ActionType) => void
//
// }


// export type ActionType = addPostACType | updateNewPostsACType | addMessageACType |
//     updateNewMessagesACType | followACType |unfollowACType |setUsersACType

// export const store: StoreType = {
//   _state: {
//     profilePage: {
//       myposts: [
//         { id: 1, message: "Hi,how are you?", likesCount: 12 },
//         { id: 2, message: "How are you", likesCount: 13 },
//       ],
//       newPosts: '',
//     },
//     dialogsPage: {
//       messages: [
//         { id: 1, message: "Hello" },
//         { id: 2, message: "How are you" },
//         { id: 3, message: "I am fine" },
//         { id: 4, message: "Hello" },
//       ],
//       dialogs: [
//         { id: 1, name: "Katya" },
//         { id: 2, name: "Ilya" },
//         { id: 3, name: "Sasha" },
//         { id: 4, name: "Sveta" },
//         { id: 5, name: "Vitya" }
//       ],
//       newMessages: " "
//     },
//     sidebar: {
//       friends: [
//         { id: 1, name: "Katya" },
//         { id: 2, name: "Ilya" },
//         { id: 3, name: "Sasha" },
//       ]
//     }
//   },
//   getState() {
//     return this._state
//   },
//
//   dispatch(action) {
//     this._state.profilePage=profileReducer (this._state.profilePage, action)
//     this._state.dialogsPage=dialogsReducer (this._state.dialogsPage, action)
//    this._state.sidebar=sidebarReducer(this._state.sidebar,action)
//     this._rerenderEntireTree()
    
    // switch (action.type) {
      

    //   case "ADD-POST": {
    //     let newPost = { id: 3, message: this._state.profilePage.newPosts, likesCount: 0 }
    //     return this._state.profilePage.myposts.push(newPost),
    //       this._state.profilePage.newPosts = '',
    //       this._rerenderEntireTree()
    //   }
    //   case "UPDATE-NEW-POST-TEXT": {
    //     return this._state.profilePage.newPosts = action.payload.newText,
    //       this._rerenderEntireTree()
    //   }
    //   case "ADD-MESSAGE": {
    //     let newMessage = { id: 5, message: this._state.dialogsPage.newMessages }
    //     return this._state.dialogsPage.messages.push(newMessage),
    //       this._state.dialogsPage.newMessages = '',
    //       this._rerenderEntireTree()
    //   }
    //   case "UPDATE-NEW-MESSAGE-TEXT": {
    //    return this._state.dialogsPage.newMessages = action.payload.newMessage,
    //     this._rerenderEntireTree()
    //   }
    // }
//   },
// //
//   subscribe(observer) {
//     this._rerenderEntireTree = observer
//   },
//   _rerenderEntireTree() {
//     console.log("kkkk")
//   },
// }

// type addPostACType = ReturnType<typeof addPostAC>
// type updateNewPostsACType = ReturnType<typeof updateNewPostsAC>
// type addMessageACType = ReturnType<typeof addMessageAC>
// type updateNewMessagesACType = ReturnType<typeof updateNewMessagesAC>






// export let state: StateProps = {
//   profilePage:{
//     myposts: [
//       {id:1, message:"Hi,how are you?", likesCount:12},
//       {id:2, message:"How are you", likesCount:13},
//     ],
//  newPosts: "kkkkkk",
//   },
//    dialogsPage:{
//     messages: [
//       { id: 1, message: "Hello"},
//       { id: 2, message: "How are you" },
//       { id: 3, message: "I am fine" },
//       { id: 4, message: "Hello" },
//     ],
//     dialogs: [
//       { id: 1, name: "Katya" },
//       { id: 2, name: "Ilya" },
//       { id: 3, name: "Sasha" },
//       { id: 4, name: "Sveta" },
//       { id: 5, name: "Vitya" }
//     ],
//    },
// sidebar:{
//   friends:[
//     { id: 1, name: "Katya" },
//       { id: 2, name: "Ilya" },
//       { id: 3, name: "Sasha" },
//   ]
// }
// }
// export const addPost=()=>{
//   let newPost={id:3, message:state.profilePage.newPosts,likesCount:0 }
//   state.profilePage.myposts.push(newPost)
//   state.profilePage.newPosts = ''
//   rerenderEntireTree ()
// // },
// export const updateNewPosts=(newText:string)=>{

//   state.profilePage.newPosts = newText
//   rerenderEntireTree ()
// }

// export const subscribe =(observer:()=>void)=>{
//   rerenderEntireTree=observer
// }
