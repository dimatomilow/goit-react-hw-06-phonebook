import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/TodoSlice'
import shortid from 'shortid';
const Form = () => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = React.useState('')
    const addHandler = () => {
        const todo = {
            id: shortid.generate(),
            text: todoValue,
            completed:true,
        };
        dispatch(addTodo(todo))
        setTodoValue('')
    }
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={todoValue}
                    type='text'
                    placeholder='Type something...'
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button
                    type='submit'
                    onClick={() => addHandler()}
                >
                    Submit
                </button>
            </form>
        )
    }


export default Form
