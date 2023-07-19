import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({ todosProps, handleChange, delTodo}) => {
    return ( 
        <ul>
            {todosProps.map((todo) => (
               <TodoItem 
                key={todo.id} 
                todoItem={todo} 
                handleChange={handleChange}
                delTodo={delTodo}
                />
            ))}
        </ul>
     );
}
 TodosList.propTypes = {
  todosProps: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default TodosList;