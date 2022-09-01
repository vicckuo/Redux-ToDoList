import { useState, useEffect } from "react";

export default function useToDo() {
    const [toDo, setTodo] = useState([{ value: "資料一", id: Date.now() }])

    //第一次開啟
    useEffect(() => {
        getLocalTodos()
    }, [])

    //USE EFFECT 將狀態放入新array
    useEffect(() => {
        saveLocalTodos()
    })

    //create
    const addToDo = (value) => {
        const toDoCopy = [...toDo]
        toDoCopy.push({ value: value, id: Date.now() })
        setTodo(toDoCopy)
    }

    //update
    const updateToDo = (index, value) => {
        const toDoCopy = [...toDo]
        toDoCopy[index].value = value
        setTodo(toDoCopy)
    }

    //delete
    const deleteToDo = (index) => {
        const toDoCopy = [...toDo]
        toDoCopy.splice(index, 1)
        setTodo(toDoCopy)
    }

    //存儲local
    const saveLocalTodos = () => {
        localStorage.setItem("toDo", JSON.stringify(toDo))
    }

    //
    const getLocalTodos = () => {
        if (localStorage.getItem("toDo") === null) {
            localStorage.setItem("toDo", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("toDo"))
            setTodo(todoLocal)
        }
    }

    //以物件的方式return出去
    return { toDo, addToDo, updateToDo, deleteToDo }

}