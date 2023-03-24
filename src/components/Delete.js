function Delete() {
  

  const handleDeleteTodo = () => {
   
    console.log('Deleting a todo');
  };

  return (
    <div>
      
      <button id="dlt" onClick={handleDeleteTodo}>Delete</button>
    </div>
  );

}

export default Delete;
