export const getFromLocalStorage = (key: string, init: number): number => {
    if (localStorage.getItem(key) || '') {
        return JSON.parse(localStorage.getItem(key) || '')
    } else {
        console.log("Did not find " + key + ". Setting to initial " + init)
        return init
    }
}

export const setInLocalStorage = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeItem = (key: string) => {
    localStorage.removeItem(key)
}