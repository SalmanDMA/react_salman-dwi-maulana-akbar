import React from 'react';

const TodoList = ({ todos, deleteTodo, markAsFinished }) => {
 return (
  <>
   {todos.length > 0 ? (
    <div>
     <table className='table mb-4'>
      <thead>
       <tr className='text-center'>
        <th scope='col'>No.</th>
        <th scope='col'>Todo item</th>
        <th scope='col'>Status</th>
        <th scope='col'>Actions</th>
       </tr>
      </thead>
      <tbody className='text-center'>
       {todos.map((todo, index) => (
        <tr key={todo.id}>
         <th scope='row'>{index + 1}</th>
         <td className={todo.completed ? 'text-decoration-line-through text-secondary' : ''}>{todo.title}</td>
         <td>{todo.completed ? 'Completed' : 'In progress'}</td>
         <td className='d-flex flex-wrap justify-content-center align-items-center gap-2'>
          <button type='button' className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>
           Delete
          </button>
          <button type='button' className='btn btn-success ms-1' onClick={() => markAsFinished(todo.id)}>
           {todo.completed ? 'Unfinished' : 'Finished'}
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   ) : (
    <p className='text-center'>No tasks, please add task first !!!</p>
   )}
  </>
 );
};

export default TodoList;
