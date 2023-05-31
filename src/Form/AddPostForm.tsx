import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../utils/validators/validators";
import {Textarea} from "../Components/common/FormsControls/FormsControls";
import s from '../../src/Components/Profile/My posts/MyPosts.module.css'


export type FormPostType = {
    newPost: string
}


const maxLength10 = maxLengthCreator(100)
export const AddPostForm: React.FC<InjectedFormProps<FormPostType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.data}>
                <Field component={Textarea} name={'newPost'} validate={[requiredField, maxLength10]}
                       placeholder={'Enter your post'} style={{width: "-webkit-fill-available"}}/>
            </div>

            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

export const AddPostFormRedux = reduxForm<FormPostType>({form: 'profileAddNewPostForm'})(AddPostForm)



