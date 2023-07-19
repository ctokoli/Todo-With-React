const TodoItem = ({todoItem, setTodos}) => {
    
    return (
    <li>
        <input 
            type="checkbox" 
            checked={todoItem.completed}
            onChange={ () => console.log('clicked')}
        />
        {todoItem.title}
    </li>
    );
}
 
export default TodoItem;