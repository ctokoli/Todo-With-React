import PropTypes from 'prop-types';

const TodoItem = ({todoItem, setTodos}) => {
    const handleChange = (id) => {
      setTodos((prevState) => 
        prevState.map((todo) => {
           if(todo.id === id){
             return {
                ...todo,
                completed: !todo.completed
            };
           }
           return todo;
        })
      )
    }
    return (
    <li>
        <input 
            type="checkbox" 
            checked={todoItem.completed}
            onChange={ () => handleChange(todoItem.id)}
        />
        {todoItem.title}
    </li>
    );
}
 
TodoItem.propTypes = {
  todoItem: PropTypes.string.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default TodoItem;