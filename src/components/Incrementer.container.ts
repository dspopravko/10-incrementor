import {incrementAC, IncrementerType, resetAC, saveInLS} from "../reducer/incrementor-reducer";
import {ReduxStateType} from "../reducer/redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Incrementor} from "./Incrementor/Incrementor";

type MapStateToPropsType = ({ counter: IncrementerType })
type MapDispatchToPropsType = {
    increment: () => void
    reset: () => void
    saveInLS: (start: number, limit: number) => void
}

export type IncrementorPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({counter: state.incrementorReducer})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        increment: () => dispatch(incrementAC()),
        reset: () => dispatch(resetAC()),
        saveInLS: (start: number, limit: number) => dispatch(saveInLS(start, limit)),
    }
}

export const IncrementerContainer = connect(mapStateToProps, mapDispatchToProps)(Incrementor);