import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {IncrementorReducerActionTypes, incrementorReducer} from "./incrementor-reduser";

type ActionTypes = IncrementorReducerActionTypes
export type ReduxStateType = ReturnType<typeof rootReducer>
export type StoreType = Store<ReduxStateType, ActionTypes>

const rootReducer = combineReducers({
    incrementorReducer
})

export const store: StoreType = createStore(rootReducer)