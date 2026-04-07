import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <section className="todo-list">
      <h2 className="todo-list__heading">Todo List</h2>
      {todos.length === 0 ? (
        <p className="todo-list__empty">No todos yet.</p>
      ) : (
        <ul className="todo-list__items">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDeleteTodo}
              onToggle={onToggleTodo}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TodoList
