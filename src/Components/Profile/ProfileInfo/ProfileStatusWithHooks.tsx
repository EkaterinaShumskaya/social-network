import React, {ChangeEvent, useEffect, useState} from 'react';

type StatusPropsType = {
    updateUserStatusThunk: (status: string) => void
    status: string
}

export const ProfileStatusWithHooks = (props: StatusPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunk(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>,) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>
            }
        </div>


    );
};
