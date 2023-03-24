
// DeleteToDo/index.js



function Delete() {
  

  const handleDeleteTodo = () => {
   
    console.log('Deleting a todo');
  };

  return (
    <div>
      <h2>Delete Todo</h2>
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  );

}

export default Delete;
