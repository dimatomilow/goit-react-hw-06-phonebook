import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleComplitedToodo,removeTodo} from '../Features/Todo/TodoSlice'
const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const togleTodoHandler = (id) => {
        dispatch(toggleComplitedToodo(id))
    }
    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }
    return (
        <div style={{ display: "flex" } }>
            <button style={{backgroundColor:"green"}}
            onClick={()=>togleTodoHandler(todo.id)}
                >
                Complete</button>
            <div style={todo.completed ? { color:"green",margin: "10px" }:{color:"red",margin:"10px"}} >
               {todo.text}
            </div>
            <button
                onClick={()=>removeTodoHandler(todo.id)}
                style={{ backgroundColor: "red" }} >
                Delete
            </button>
        </div>
    )
}

export default TodoItem
