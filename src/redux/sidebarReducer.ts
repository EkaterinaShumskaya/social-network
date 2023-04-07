import {ActionType} from "./ActionType";


export type sidebarType = {
  friends: FriendType[]
}
export type FriendType = {
  id: number
  name: string
}
let initialState:sidebarType={
  friends:[
    { id: 1, name: "Katya" },
    { id: 2, name: "Ilya" },
    { id: 3, name: "Sasha" },
  ]
}

export const sidebarReducer=(state=initialState,action:ActionType):sidebarType=>{
  return state
}