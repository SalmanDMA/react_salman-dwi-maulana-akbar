import './todoListItems.css';
export default function TodoListItems({ todoItem }) {
 return (
  <section className='todo-list-items'>
   <ul>
    <li className={todoItem.completed ? 'completed' : ''}>{todoItem.title}</li>
   </ul>
  </section>
 );
}
