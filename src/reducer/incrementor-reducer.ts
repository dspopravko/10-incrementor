export type IncrementorReducerActionTypes =
    ReturnType<typeof resetAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
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
            return {...state, value: value}
        case "RESET-COUNTER":
            return {...state, value: state.start}
        case "SET-VARIABLES": {
            return {...state, start: action.start, limit: action.limit}
        }
        default: return state
    }
}