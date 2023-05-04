import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {addMessageAC, dialogsPageType} from '../../redux/dialogsReducer';
import {AppStateType} from '../../redux/reduxStore';
import {Dialogs} from './Dialogs';
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {ComponentType} from "react";


type MapStateToPropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageAC(newMessageBody))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

