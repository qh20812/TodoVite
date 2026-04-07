import { useState } from 'react'
import './TodoForm.css'

function ToDoForm({ onAddTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value.trim()) return

    onAddTodo(value)
    setValue('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2 className="todo-form__heading">Add New Todo</h2>
      <input
        className="todo-form__input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter a new todo..."
      />
      <button className="todo-form__submit" type="submit">
        Add Todo
      </button>
    </form>
  )
}

export default ToDoForm
