import PropTypes from 'prop-types';

const TodoItem = ({todoItem, handleChange, delTodo}) => {
    
    return (
    <li>
        <input 
            type="checkbox" 
            checked={todoItem.completed}
            onChange={ () => handleChange(todoItem.id)}
        />
        <button onClick={ () => delTodo(todoItem.id)}>Delete</button>
        {todoItem.title}
    </li>
    );
}
 
TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default TodoItem;