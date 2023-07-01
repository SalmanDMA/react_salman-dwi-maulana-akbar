import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component {
 render() {
  const { addTodo, setInputValue, inputValue, findTodo, todos } = this.props;

  return (
   <form className='row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2' onSubmit={addTodo}>
    <div className='col-12'>
     <div className='form-outline'>
      <input type='text' id='form1' className='form-control' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <label htmlFor='form1' className='form-label'>
       Enter a task here
      </label>
     </div>
    </div>

    <div className='col-12 gap-3 d-flex'>
     <button type='submit' className='btn btn-primary'>
      Save
     </button>
     <button type='button' className='btn btn-warning' onClick={() => findTodo(inputValue)} disabled={todos.length === 0}>
      Get tasks
     </button>
    </div>
   </form>
  );
 }
}

export default TodoInput;
