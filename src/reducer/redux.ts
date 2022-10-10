import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import {IncrementorReducerActionTypes, incrementorReducer} from "./incrementor-reducer";
import {loadState, saveState} from "../components/localStorage/localStorage";

type ActionTypes = IncrementorReducerActionTypes
export type ReduxStateType = ReturnType<typeof rootReducer>
export type StoreType = Store<ReduxStateType, ActionTypes>

const rootReducer = combineReducers({
    incrementorReducer
})

const persistedState = loadState();
export const store: StoreType = createStore(
    rootReducer,
    persistedState
)

store.subscribe(() => {
    saveState({
        incrementorReducer: store.getState().incrementorReducer
    });
});