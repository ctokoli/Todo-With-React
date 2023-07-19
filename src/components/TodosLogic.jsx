import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useState } from "react";
 

const TodosLogic = () => {
    const [todos, setTodo] = useState([
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
        {
          id: 4,
          title: 'Deploy to live servers',
          completed: true,
        },
      ]);
      console.log('====================================');
      console.log(setTodo);
      console.log('====================================');
    return ( 
        <div>
            <InputTodo/>
            <TodosList todosProps={todos} setTodo={setTodo}/>  
        </div>
     );
}
 
export default TodosLogic;