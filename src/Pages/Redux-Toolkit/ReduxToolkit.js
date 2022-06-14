import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import {Section}from'./components/Styled/Styled'
import { useSelector } from 'react-redux/es/exports'
function ReduxToolkit() {
    const todos=useSelector((state)=>state.todo.todos)
    return (
                <Section >
                    <div >
                        <h1 >Redux Toolkit State Change</h1>
                        <User />
                    </div>
                    <div >
                        <h1 >Redux Toolkit Todo App</h1>
                <Form />
                {todos?.map(todo => ( <TodoItem key={todo.id} text={todo.text} />)

                )}

                    </div>
                    <div >
                        <h1 >Redux Toolkit Async Thunk</h1>
                        <Posts />
                    </div>
                </Section>
    )
}

export default ReduxToolkit
