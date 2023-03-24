function Delete() {
  

  const handleDeleteTodo = () => {
   
    console.log('Deleting a todo');
  };

  return (
    <div>
      
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  );

}

export default Delete;
