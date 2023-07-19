import TodoItem from '@/components/TodoItem';
const TodosList = ({ todosProps }) => {
    return ( 
        <ul>
            {todosProps.map((todo) => (
               <TodoItem todoItem={todo}/>
            ))}
        </ul>
     );
}
 
export default TodosList;