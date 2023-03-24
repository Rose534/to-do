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
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={event => setText(event.target.value)} placeholder="Update" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
