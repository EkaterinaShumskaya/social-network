import {ActionType} from "./ActionType";


export type dialogsPageType = {
  messages: MessageType[]
  dialogs: DialogItemType[]
  newMessages: string
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
  newMessages: " "
}

export const dialogsReducer=(state=initState,action:ActionType):dialogsPageType=>{
  switch (action.type) {
    case "ADD-MESSAGE": {
      let newMessage = { id: 5, message: state.newMessages }
      const copyState={...state,
        newMessages:'',
        messages:[...state.messages,newMessage]}
      // const copyState={...state}
      // copyState.messages=[...state.messages]
      // copyState.messages.push(newMessage)
      // copyState.newMessages=''
      return copyState
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      const copyState = {...state,newMessages:action.payload.newMessage}
      // copyState.newMessages=action.payload.newMessage
     return copyState
    }
    default: {
      return state
    }
  }
}

export const addMessageAC = () => {
  return {
    type: "ADD-MESSAGE"
  } as const
}

export const updateNewMessagesAC = (text: string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    payload:{
      newMessage: text
    }
    
  } as const

}
export type addMessageACType = ReturnType<typeof addMessageAC>
export type updateNewMessagesACType = ReturnType<typeof updateNewMessagesAC>


// export type ActionType = addMessageACType | updateNewMessagesACType