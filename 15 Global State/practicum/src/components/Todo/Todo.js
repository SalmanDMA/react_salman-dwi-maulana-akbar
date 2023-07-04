import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Layout from '../Global/Layout/Layout';
import { navbarHome } from '../../helper/navbarData';

const Todo = () => {
 return (
  <Layout navbarData={navbarHome}>
   <h4 className='text-center fs-1 my-3 pb-3'>To Do App</h4>
   <TodoInput />
   <TodoList />
  </Layout>
 );
};

export default Todo;
