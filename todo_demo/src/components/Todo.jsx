import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from "../action/Action";
const Todo = ()=>{
const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("")
    return (
        <>
        <h2>Todo App</h2>
        <input type="text" placeholder="Enter Your Todo" 
        value={inputValue} 
         onChange={(event)=> setInputValue(event.target.value)}
         />
        <button onClick={()=> dispatch(addTodo(inputValue))}>Add</button>
        </>
    )
}
export default Todo