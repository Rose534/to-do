import React from "react";

function Create() {
  const handleCreateTodo = () => {
   
    console.log('Creating a new todo');
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <button onClick={handleCreateTodo}>Create</button>
    </div>
  );
};
  
  
  export default Create;
  