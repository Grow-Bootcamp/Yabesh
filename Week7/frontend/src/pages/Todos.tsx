import { useState, type SyntheticEvent } from "react";
import { useTodos } from "../context/TodoContext";

// Add Todo Component
function AddTodo() {
  const [text, setText] = useState('');
  const { dispatch } = useTodos();

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch({
      type: 'add',
      text: text.trim(),
    });

    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Enter a new todo...'
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}

// Todo List Component
function TodoList({ search, filter }: { search: string; filter: 'all' | 'active' | 'completed';}) {
  const { todos, dispatch } = useTodos();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // Search and Filter
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.text.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = 
      filter === 'all' ||
      (filter === 'active' && !todo.done) ||
      (filter === 'completed' && todo.done);

    return matchesSearch && matchesFilter;
  });

  // Start Editing
  function startEditing(id: number, text: string) {
    setEditingId(id);
    setEditText(text);
  }

  // Save Edited Todo
  function saveEdit(id: number) {
    if(!editText.trim()) return;

    dispatch({
      type: 'edit',
      id,
      text: editText.trim(),
    });

    setEditingId(null);
    setEditText('');
  }

  if(filteredTodos.length === 0) {
    return <p>No todos found.</p>
  }

  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input  
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />

              <button onClick={() => saveEdit(todo.id)}>
                Save
              </button>

              <button 
                onClick={() => {
                  setEditingId(null);
                  setEditText('');
                }} 
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <input 
                type="checkbox" 
                checked={todo.done}
                onChange={() => dispatch({ type: 'toggle', id: todo.id })}              
              />

              <span 
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>

              <button onClick={() => startEditing(todo.id, todo.text)}>
                Edit
              </button>

              <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

// Main Todos Page
export default function Todos() {
  const { dispatch } = useTodos();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  return (
    <div>
      <h1>My Todo List</h1>

      <AddTodo />

      <hr />

      {/* Search */}
      <input 
        type="text" 
        placeholder="Search todos..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div>
        <button onClick={() => setFilter('all')}>
          All
        </button>
        
        <button onClick={() => setFilter('active')}>
          Active
        </button>
        
        <button onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>

      {/* Todo List */}
      <TodoList search={search} filter={filter} />

      {/* Clear Completed Todos */}
      <button onClick={() => dispatch({ type: 'clearDone'})}>
        Clear Finished
      </button>
    </div>
  );
}