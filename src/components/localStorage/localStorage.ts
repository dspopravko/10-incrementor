export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

// export const getFromLocalStorage = (key: string, init: number): number => {
//     if (localStorage.getItem(key) || '') {
//         return JSON.parse(localStorage.getItem(key) || '')
//     } else {
//         console.log("Did not find " + key + ". Setting to initial " + init)
//         return init
//     }
// }
//
// export const setInLocalStorage = (key: string, value: number) => {
//     localStorage.setItem(key, JSON.stringify(value));
// }
//
// export const removeItem = (key: string) => {
//     localStorage.removeItem(key)
// }
