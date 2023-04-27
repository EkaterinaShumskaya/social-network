import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../utils/validators/validators";
import {Textarea} from "../Components/common/FormsControls/FormsControls";



export type FormPostType={
    newPost:string
}


const maxLength10=maxLengthCreator(10)
export const AddPostForm:React.FC<InjectedFormProps<FormPostType>> =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPost'} validate={[requiredField, maxLength10]} placeholder={'Send message'}/>
            <div><button>Add post</button></div>
        </form>
    )
}

export const AddPostFormRedux=reduxForm <FormPostType> ({form:'profileAddNewPostForm'})(AddPostForm)

//     <div>
//     <textarea onChange={onPostChange} ref={newPostElement} value={props.newPosts}/>
// <div><button onClick={onAddPost}>Add post</button></div>
// </div>

