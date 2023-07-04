import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
 name: 'todo',
 initialState: {
  todos: [],
  inputValue: '',
  searchResult: [],
 },
 reducers: {
  setInputValue: (state, action) => {
   state.inputValue = action.payload;
  },

  setSearchResult: (state, action) => {
   state.searchResult = action.payload;
  },

  setTodos: (state, action) => {
   state.todos = action.payload;
  },

  addTodo: (state) => {
   if (!state.inputValue) {
    alert('Please enter a task');
    return;
   }
   const newTodo = {
    id: Date.now(),
    title: state.inputValue,
    completed: false,
   };
   state.todos.push(newTodo);
   state.inputValue = '';
   state.searchResult = [];
  },

  deleteTodo: (state, action) => {
   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
   state.searchResult = state.searchResult.filter((todo) => todo.id !== action.payload);
  },

  findTodo: (state, action) => {
   if (!state.inputValue) {
    alert('Please enter a task');
    return;
   }
   const searchResult = state.todos.filter((todo) => todo.title.toLowerCase().includes(state.inputValue.toLowerCase()));
   state.searchResult = searchResult;
   state.inputValue = '';
  },

  markAsFinished: (state, action) => {
   state.todos = state.todos.map((todo) => {
    if (todo.id === action.payload) {
     return { ...todo, completed: !todo.completed };
    }
    return todo;
   });
   state.searchResult = state.searchResult.map((todo) => {
    if (todo.id === action.payload) {
     return { ...todo, completed: !todo.completed };
    }
    return todo;
   });
  },

  clearAllData: (state) => {
   if (state.todos.length === 0) {
    alert('No tasks to clear.');
    return;
   }
   const confirmClear = window.confirm('Are you sure you want to clear all tasks?');
   if (confirmClear) {
    state.todos = [];
    state.searchResult = [];
   }
  },

  markAllAsFinished: (state) => {
   if (state.todos.length === 0) {
    alert('No tasks to mark as finished.');
    return;
   }
   const confirmMark = window.confirm(`Are you sure you want to ${state.todos.some((todo) => !todo.completed) ? 'Mark all as finished?' : 'Mark all as unfinished?'}`);
   if (confirmMark) {
    state.todos = state.todos.map((todo) => ({ ...todo, completed: !todo.completed }));
    state.searchResult = state.searchResult.map((todo) => ({ ...todo, completed: !todo.completed }));
   }
  },
 },
});

export const { setInputValue, setSearchResult, setTodos, addTodo, deleteTodo, findTodo, markAsFinished, clearAllData, markAllAsFinished } = todoSlice.actions;

export default todoSlice.reducer;
