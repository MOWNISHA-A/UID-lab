import React, { useState, useRef, useEffect } from 'react';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  // Focus the input when entering edit mode
  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    } else {
      // If empty, cancel edit
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        {/* Checkbox */}
        <button
          className="todo-checkbox"
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed ? '✓' : ''}
        </button>

        {/* Todo Text */}
        <div className="todo-text-container">
          {isEditing ? (
            <input
              ref={editInputRef}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSaveEdit}
              onKeyDown={handleKeyDown}
              className="todo-edit-input"
            />
          ) : (
            <>
              <span 
                className="todo-text"
                onDoubleClick={handleEdit}
                title="Double-click to edit"
              >
                {todo.text}
              </span>
              <span className="todo-date">
                Created: {formatDate(todo.createdAt)}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              className="edit-btn"
              onClick={handleEdit}
              aria-label="Edit todo"
              title="Edit"
            >
              ✏️
            </button>
            <button
              className="delete-btn"
              onClick={() => onDelete(todo.id)}
              aria-label="Delete todo"
              title="Delete"
            >
              🗑️
            </button>
          </>
        )}
        {isEditing && (
          <>
            <button
              className="save-btn"
              onClick={handleSaveEdit}
              aria-label="Save edit"
              title="Save"
            >
              ✅
            </button>
            <button
              className="cancel-btn"
              onClick={handleCancelEdit}
              aria-label="Cancel edit"
              title="Cancel"
            >
              ❌
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;