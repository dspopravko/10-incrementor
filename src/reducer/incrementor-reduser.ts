import {getFromLocalStorage, setInLocalStorage} from "../components/localStorage/localStorage";

export type IncrementorReducerActionTypes =
    ReturnType<typeof resetAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof getFromLS>
    | ReturnType<typeof saveInLS>


export type IncrementerType = {
    start: number
    limit: number
    value: number
}
export type varType = 'start' | 'limit' | 'value'

export const incrementAC = () => {
    return {
        type: "INCREMENT-COUNTER"
    } as const
}
export const resetAC = () => {
    return {
        type: "RESET-COUNTER",
    } as const
}
export const getFromLS = () => {
    return {
        type: "GET-VARIABLES",
    } as const
}
export const saveInLS = (start: number, limit: number) => {
    return {
        type: "SET-VARIABLES",
        start: start,
        limit: limit
    } as const
}

const initialState: IncrementerType = {
    start: 0,
    value: 1,
    limit: 10
}

export const incrementorReducer = (state: IncrementerType = initialState, action: IncrementorReducerActionTypes): IncrementerType => {
    switch (action.type) {
        case "INCREMENT-COUNTER":
            const value = state.value + 1
            setInLocalStorage("value", value)
            return {...state, value: value}
        case "RESET-COUNTER":
            setInLocalStorage("value", state.start)
            return {...state, value: state.start}
        case "GET-VARIABLES": {
            const newstate: any = {}
            for (const [key, value] of Object.entries(state)) {
                newstate[key] = getFromLocalStorage(key, value)
            }
            console.log(newstate)
            return {...newstate}
        }
        case "SET-VARIABLES": {
            setInLocalStorage("start", action.start)
            setInLocalStorage("limit", action.limit)
            return {...state, start: action.start, limit: action.limit}
        }
        default: return state
    }
}