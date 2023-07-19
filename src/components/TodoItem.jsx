const TodoItem = ({todoItem}) => {
    
    return (
    <li>
        <input type="checkbox" />
        {todoItem.title}
    </li>
    );
}
 
export default TodoItem;