import React, { useState } from 'react';

const Update = ({ updateTodo }) => {
  const [id, setId] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTodo(id, text);
    setId('');
    setText('');
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={id} onChange={event => setId(event.target.value)} placeholder="ID" />
        <input type="text" value={text} onChange={event => setText(event.target.value)} placeholder="New text" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
