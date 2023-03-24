import React from 'react';
import Create from './components/Create';
import Update from './components/Update';
import View from './components/View';
import Delete from './components/Delete';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
 

  return (
    <div>
      <h1>Todo App</h1>
      <Create />
      <Update />
      <Delete />
      <View />
    </div>
  );
};
export default App;

