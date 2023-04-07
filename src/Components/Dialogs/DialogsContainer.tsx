import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {addMessageAC, dialogsPageType, updateNewMessagesAC} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/reduxStore';
import {Dialogs} from './Dialogs';
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {ComponentType} from "react";


type MapStateToPropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessages: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessages: (text: string) => {
            dispatch(updateNewMessagesAC(text))
        }
    }
}

export const DialogsContainer= compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

