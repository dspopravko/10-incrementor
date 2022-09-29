export const getFromLocalStorage = (key: string, init: number, setter: (value: number) => void) => {
    if (localStorage.getItem(key) || '') {
        const items = JSON.parse(localStorage.getItem(key) || '');
        items && setter(items);
    } else {
        console.log("Did not find " + key + ". Setting to initial" + init)
        setter(init)}
}

export const setInLocalStorage = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeItem = (key: string) => {
    localStorage.removeItem(key)
}