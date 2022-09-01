import {
    ADD_TO_DO,
    UPDATE_TO_DO,
    DELETE_TO_DO
} from '../actions/toDoAction'

//to-do-list的初始值
const initToDo = [{ value: "資料一", id: Date.now() }]

export default function toDoReducer(state = initToDo, action) {
    //action中依照先前定義的資料結構取得參數
    const { type, payload } = action

    //由於JS的array為類call by ref的形式，先複製一份再修改
    const stateCopy = [...state]

    switch (type) {
        case ADD_TO_DO:
            //id是為了避免陣列元素不必要的渲染
            const itemNew = { value: payload.value, id: Date.now() }
            stateCopy.push(itemNew)
            return stateCopy

        case UPDATE_TO_DO:
            stateCopy[payload.index].value = payload.value
            return stateCopy

        case DELETE_TO_DO:
            stateCopy.splice(payload.index, 1)
            return stateCopy

        default:
            return state
    }

}