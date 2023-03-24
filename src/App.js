import React, { useState } from 'react';
import Create from './components/Create';
import Update from './components/Update';
import View from './components/View';
import Delete from './components/Delete';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Do laundry' },
    { id: 3, text: 'Finish project' },
  ]);

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <Create createTodo={createTodo} />
      <Update updateTodo={updateTodo} />
      <Delete deleteTodo={deleteTodo} />
      <View todos={todos} />
    </div>
  );
};

export default App;

