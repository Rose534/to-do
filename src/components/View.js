import React, { useState } from 'react';
import Delete from './Delete';
import Update from './Update';

function View() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Do laundry' },
    { id: 3, text: 'Finish project' },
  ]);

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    console.log(`Deleted todo with id ${id}`);
  };

  const handleUpdateTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log(`Updated todo with id ${id}`);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td className="actions">
                <Update id={todo.id} text={todo.text} onUpdate={handleUpdateTodo} />
                <Delete id={todo.id} onDelete={handleDeleteTodo} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default View;
