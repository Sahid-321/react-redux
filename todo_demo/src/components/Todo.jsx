import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from "../action/Action";
const Todo = ()=>{
const dispatch = useDispatch();

const list = useSelector((state)=>state.TodoReducer.list)

    const [inputValue, setInputValue] = useState("")
    return (
        <>
        <h2>Todo App</h2>
        <input type="text" placeholder="Enter Your Todo" 
        value={inputValue} 
         onChange={(event)=> setInputValue(event.target.value)}
         />
        <button onClick={()=> dispatch(addTodo(inputValue) ,setInputValue(""))}>Add</button>
       <div>
        {
list.map((elem)=>{
    return(
        <>
        <h4>{elem.data} <button 
        onClick={()=>dispatch(deleteTodo(elem.id))}>Delete</button></h4>
        </>
    )
})
        }

        <button onClick={()=> dispatch(removeTodo())}>Remove All</button>
       </div>
        </>
    )
}
export default Todo