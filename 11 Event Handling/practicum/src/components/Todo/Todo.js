import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {
 const [inputValue, setInputValue] = useState('');
 const [todos, setTodos] = useState([]);
 const [searchResult, setSearchResult] = useState([]);

 const addTodo = (e) => {
  e.preventDefault();
  if (!inputValue) {
   alert('Please enter a task');
   return;
  }
  const newTodo = {
   id: Date.now(),
   title: inputValue,
   completed: false,
  };
  setTodos([...todos, newTodo]);
  setInputValue('');
  setSearchResult([]);
 };

 const deleteTodo = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
  setSearchResult(updatedTodos);
 };

 const findTodo = (title) => {
  const searchResult = todos.filter((todo) => todo.title.toLowerCase().includes(title.toLowerCase()));
  setSearchResult(searchResult);
  setInputValue('');
 };

 const markAsFinished = (id) => {
  const updatedTodos = todos.map((todo) => {
   if (todo.id === id) {
    return { ...todo, completed: !todo.completed };
   }
   return todo;
  });
  setTodos(updatedTodos);
  setSearchResult(updatedTodos);
 };

 return (
  <section className='vh-100' style={{ backgroundColor: '#eee' }}>
   <div className='container py-5 h-100'>
    <div className='row d-flex justify-content-center align-items-center h-100'>
     <div className='col col-lg-10 col-xl-7'>
      <div className='card rounded-3'>
       <div className='card-body p-4'>
        <h4 className='text-center fs-1 my-3 pb-3'>To Do App</h4>
        <TodoInput addTodo={addTodo} setInputValue={setInputValue} inputValue={inputValue} findTodo={findTodo} todos={todos} />
        <TodoList todos={searchResult.length > 0 ? searchResult : todos} deleteTodo={deleteTodo} markAsFinished={markAsFinished} />
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Todo;
