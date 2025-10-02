import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Edit todo text
  const editTodo = (id, newText) => {
    if (newText.trim() !== '') {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      ));
    }
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
        <p>Organize your tasks efficiently</p>
      </header>

      <main className="app-main">
        {/* Add Todo Form */}
        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            className="new-todo-input"
            autoFocus
          />
          <button type="submit" className="add-todo-btn">
            Add Todo
          </button>
        </form>

        {/* Todo Stats */}
        {todos.length > 0 && (
          <div className="todo-stats">
            <span className="todo-count">
              {activeTodosCount} active, {completedTodosCount} completed
            </span>
            {completedTodosCount > 0 && (
              <button onClick={clearCompleted} className="clear-completed-btn">
                Clear Completed
              </button>
            )}
          </div>
        )}

        {/* Filter Buttons */}
        {todos.length > 0 && (
          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All ({todos.length})
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active ({activeTodosCount})
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedTodosCount})
            </button>
          </div>
        )}

        {/* Todo List */}
        <div className="todo-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              {todos.length === 0 ? (
                <p>No todos yet. Add one above!</p>
              ) : (
                <p>No {filter} todos.</p>
              )}
            </div>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={deleteTodo}
                onToggle={toggleTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;