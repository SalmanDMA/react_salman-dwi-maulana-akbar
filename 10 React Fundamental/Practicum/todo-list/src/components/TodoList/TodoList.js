import todoListData from '../../helper/todoListData';
import Header from '../Global/Header';
import TodoListItems from './TodoListItems';

export default function TodoList() {
 return (
  <div>
   <Header title='To Do App' />
   {todoListData.map((todo) => (
    <TodoListItems key={todo.id} todoItem={todo} />
   ))}
  </div>
 );
}
