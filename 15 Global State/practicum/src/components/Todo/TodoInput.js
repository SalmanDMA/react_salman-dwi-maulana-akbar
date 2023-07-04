import React from 'react';
import './TodoInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, addTodo, findTodo } from '../../store/slices/todoSlices';

const TodoInput = () => {
 const todos = useSelector((state) => state.todo.todos);
 const inputValue = useSelector((state) => state.todo.inputValue);
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addTodo());
 };

 const handleFindTodo = () => {
  dispatch(findTodo(inputValue));
 };

 return (
  <form className='row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2' onSubmit={handleSubmit}>
   <div className='col-12'>
    <div className='form-outline'>
     <input type='text' id='form1' className='form-control' onChange={(e) => dispatch(setInputValue(e.target.value))} value={inputValue} />
     <label htmlFor='form1' className='form-label'>
      Enter a task here
     </label>
    </div>
   </div>

   <div className='col-12 gap-3 d-flex'>
    <button type='submit' className='btn btn-primary'>
     Save
    </button>
    <button type='button' className='btn btn-warning' onClick={handleFindTodo} disabled={todos.length === 0}>
     Get tasks
    </button>
   </div>
  </form>
 );
};

export default TodoInput;
