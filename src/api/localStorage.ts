export function setToLocalStorage<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage<T>(key: string): T {
    return JSON.parse(window.localStorage.getItem(key)!);
}
