import React, { useState } from 'react';

const Create = ({ createTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({
      id: Date.now(),
      text,
    });
    setText('');
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input id="create" type="text" value={text} onChange={event => setText(event.target.value)} placeholder="Create"/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
