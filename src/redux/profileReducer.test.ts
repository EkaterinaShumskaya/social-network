import {addPostAC, deletePost, profilePageType, profileReducer} from "./profileReducer";

const startState:profilePageType = {
    myposts: [
        {id: 1, message: "Hi,how are you?", likesCount: 12},
        {id: 2, message: "How are you", likesCount: 13},
    ],
    profile: null,
    status: ''
}
test ('new post should be added', () => {

    const action = addPostAC('it kamasutra')
    const newState = profileReducer(startState, action)

    expect(newState.myposts.length).toBe(3)

})

test ('after deleting length of messages should be decrement', () => {


    const action = deletePost(1)
    const newState = profileReducer(startState, action)

    expect(newState.myposts.length).toBe(1)

})