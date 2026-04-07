import { useState } from 'react'

function ToDoForm({ onAddTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value.trim()) return

    onAddTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Todo</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default ToDoForm
