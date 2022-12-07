import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addTodo, deleteTodo, removeAll } from "./action/index";

const Todo = ()=>{
    const dispatch = useDispatch();
    const list = useSelector((state)=> state.TodoReducer.list)

    const [inputValue, setInputValue] = useState('');

    return (
        <>
    <h1>Todo App</h1>
    <input type="text" placeholder="Enter Todo" 
    value={inputValue}
   onChange = {(event)=> setInputValue(event.target.value)}  />
    <button onClick={()=>dispatch(addTodo(inputValue), setInputValue(''))} >Add</button>
<div>
    {
list.map((ele)=>{
    return(
        <div key={ele.id}>
           <h3>{ele.data} <button onClick={()=>dispatch(deleteTodo(ele.id)) }>Delete</button></h3>
            
        </div>
    )
})
    }
    <button onClick={()=> dispatch(removeAll())} >Remove All</button>
</div>
    </>
    )
}
export default Todo;
