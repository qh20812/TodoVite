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
        completed: false,
      },
    ])
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const toggleTodoCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <ToDoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodoCompleted}
      />
    </div>
  )
}

export default App
