import { useState, useContext } from 'react'

import ToDoContext from '../../../context/ToDoContext'

export default function AddToDo() {
    const [value, setValue] = useState("")
    const { addToDo } = useContext(ToDoContext)

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button
                onClick={() => {
                    addToDo(value)
                    //清除輸入後的文字框
                    setValue("")
                }}>
                新增
            </button>
        </div>
    )
}