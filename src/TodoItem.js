import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (window.confirm('Are you sure you want to edit this todo?')) {
      setIsEditing(true);
    }
  };

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, title: newTitle });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(todo.id);
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      <div className="actions">
        <button onClick={handleEdit}>Edit</button>
        {isEditing ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
