
function View() {
  const todos = [
    { id: 1, text: 'Buy milk' },
    { id: 2, text: 'Do laundry' },
    { id: 3, text: 'Finish project' },
  ];

  return (
    <div>
      <h2>View Todos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  


export default View;
