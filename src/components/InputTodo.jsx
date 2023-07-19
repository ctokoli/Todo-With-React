import { useState } from "react";


const InputTodo = () => {
   const [title, setTitle] = useState('');

   const handleChange = (e) => {
    setTitle(e.target.value)
    
   }
    return ( 
        <form>
            <input type="input" 
             value={title} 
             placeholder="Add Todo...." 
             onChange={handleChange}   
             />
            <button>Submit</button>
        </form>
    )
}
 
export default InputTodo;