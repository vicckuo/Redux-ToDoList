import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { ADD_TO_DO } from '../../../redux/actions/toDoAction'


export default function AddToDo() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button
                onClick={() => {
                    dispatch({
                        type: ADD_TO_DO,
                        payload: { value: value }
                    })
                    //清除輸入後的文字框
                    setValue("")
                }}>
                新增
            </button>
        </div>
    )
}