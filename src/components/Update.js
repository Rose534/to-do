// UpdateToDo/index.js

function Update() {
  const handleUpdateTodo = () => {
   
    console.log('Updating a todo');
  };

  return (
    <div>
      <h2>Update Todo</h2>
      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
};

}
 

 

export default Update;
