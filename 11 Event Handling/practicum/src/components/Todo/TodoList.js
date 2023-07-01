import React, { Component } from 'react';

class TodoList extends Component {
 render() {
  const { todos, deleteTodo, markAsFinished, markAllAsFinished, clearAllData } = this.props;

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
      {todos.length > 1 && (
       <div className='d-flex justify-content-end gap-3'>
        <button type='button' className='btn btn-danger' onClick={() => clearAllData()}>
         Clear all Data
        </button>
        <button type='button' className='btn btn-success' onClick={() => markAllAsFinished()}>
         {todos.some((todo) => !todo.completed) ? 'Mark all as finished' : 'Mark all as unfinished'}
        </button>
       </div>
      )}
     </div>
    ) : (
     <p className='text-center'>No tasks, please add task first !!!</p>
    )}
   </>
  );
 }
}

export default TodoList;
