import { useState } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const trimmedText = text.trim()
    if (!trimmedText) return

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: trimmedText,
      },
    ])
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <ToDoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
