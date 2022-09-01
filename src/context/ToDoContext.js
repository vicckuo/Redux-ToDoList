import { createContext } from "react";

export const initToDo = {
    data: [{ value: "資料一", id: Date.now() }],
    updateToDo: () => { },
    addToDo: () => { },
    deleteToDo: () => { }
}

export default createContext(initToDo)