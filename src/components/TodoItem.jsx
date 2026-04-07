import './TodoItem.css'

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="todo-item">
      <label className="todo-item__label">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={`todo-item__text ${todo.completed ? 'todo-item__text--completed' : ''}`}>
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        className="todo-item__delete"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
