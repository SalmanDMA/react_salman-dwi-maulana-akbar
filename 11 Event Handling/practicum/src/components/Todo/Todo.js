import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todo extends Component {
 constructor(props) {
  super(props);
  this.state = {
   inputValue: '',
   todos: [],
   searchResult: [],
  };
 }

 addTodo = (e) => {
  e.preventDefault();
  if (!this.state.inputValue) {
   alert('Please enter a task');
   return;
  }
  const newTodo = {
   id: Date.now(),
   title: this.state.inputValue,
   completed: false,
  };
  this.setState((prevState) => ({
   todos: [...prevState.todos, newTodo],
   inputValue: '',
   searchResult: [],
  }));
 };

 deleteTodo = (id) => {
  this.setState((prevState) => ({
   todos: prevState.todos.filter((todo) => todo.id !== id),
   searchResult: prevState.searchResult.filter((todo) => todo.id !== id),
  }));
 };

 findTodo = (title) => {
  if (!this.state.inputValue) {
   alert('Please enter a task');
   return;
  }
  const searchResult = this.state.todos.filter((todo) => todo.title.toLowerCase().includes(title.toLowerCase()));
  this.setState({
   searchResult: searchResult,
   inputValue: '',
  });
 };

 markAsFinished = (id) => {
  this.setState((prevState) => ({
   todos: prevState.todos.map((todo) => {
    if (todo.id === id) {
     return { ...todo, completed: !todo.completed };
    }
    return todo;
   }),
   searchResult: prevState.searchResult.map((todo) => {
    if (todo.id === id) {
     return { ...todo, completed: !todo.completed };
    }
    return todo;
   }),
  }));
 };

 clearAllData = () => {
  const { todos } = this.state;
  if (todos.length === 0) {
   alert('No tasks to clear.');
   return;
  }
  const confirmClear = window.confirm('Are you sure you want to clear all tasks?');
  if (confirmClear) {
   todos.forEach((todo) => this.deleteTodo(todo.id));
  }
 };

 markAllAsFinished = () => {
  const { todos } = this.state;
  if (todos.length === 0) {
   alert('No tasks to mark as finished.');
   return;
  }
  const confirmMark = window.confirm(`Are you sure you want to ${todos.some((todo) => !todo.completed) ? 'Mark all as finished ?' : 'Mark all as unfinished ?'}`);
  if (confirmMark) {
   todos.forEach((todo) => this.markAsFinished(todo.id));
  }
 };

 render() {
  const { inputValue, todos, searchResult } = this.state;

  return (
   <section className='vh-100' style={{ backgroundColor: '#eee' }}>
    <div className='container py-5 h-100'>
     <div className='row d-flex justify-content-center align-items-center h-100'>
      <div className='col col-lg-10 col-xl-7'>
       <div className='card rounded-3'>
        <div className='card-body p-4'>
         <h4 className='text-center fs-1 my-3 pb-3'>To Do App</h4>
         <TodoInput addTodo={this.addTodo} setInputValue={(value) => this.setState({ inputValue: value })} inputValue={inputValue} findTodo={this.findTodo} todos={todos} />
         <TodoList todos={searchResult.length > 0 ? searchResult : todos} deleteTodo={this.deleteTodo} markAsFinished={this.markAsFinished} markAllAsFinished={this.markAllAsFinished} clearAllData={this.clearAllData} />
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  );
 }
}

export default Todo;
