import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
};
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleComplitedToodo:(state,action)=> {
const toggleTodo=state.todos.find((todo)=>todo.id === action.payload)
toggleTodo.completed=!toggleTodo.completed
        },
        removeTodo: (state, action) => {
state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
});
export const{addTodo,toggleComplitedToodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer;
