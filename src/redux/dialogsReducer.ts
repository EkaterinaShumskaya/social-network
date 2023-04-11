
export type dialogsPageType = {
  messages: MessageType[]
  dialogs: DialogItemType[]
}
export type MessageType = {
  id: number,
  message: string
}
export type DialogItemType = {
  id: number
  name: string
}


const initState: dialogsPageType={
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you" },
    { id: 3, message: "I am fine" },
    { id: 4, message: "Hello" },
  ],
  dialogs: [
    { id: 1, name: "Katya" },
    { id: 2, name: "Ilya" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Vitya" }
  ],

}
export type DialogsActions=ReturnType<typeof addMessageAC>
export const dialogsReducer=(state=initState,action:DialogsActions):dialogsPageType=>{
  switch (action.type) {
    case "ADD-MESSAGE": {
      let newMessage = { id: 5, message: action.newMessageBody }
      const copyState={...state,
        messages:[...state.messages,newMessage]}
      return copyState
    }
    default: {
      return state
    }
  }
}

export const addMessageAC = (newMessageBody:string) => {
  return {
    type: "ADD-MESSAGE",
    newMessageBody
  } as const



}
// export type addMessageACType = ReturnType<typeof addMessageAC>


// export type ActionType = addMessageACType | updateNewMessagesACType