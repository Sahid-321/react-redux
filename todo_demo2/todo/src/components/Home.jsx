 import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
 import { addTodo, deleteTodo, remove } from "./action/action.js";

const Home = ()=>{
    const dispatch = useDispatch();
    const [data, setData] = useState('')
    
    return(
        <div>
<h1>Add todo</h1>
<input type="text" placeholder="Enter todo"
 value={data} onChange={(event)=> setData(event.target.value)} />
<button onClick={()=> dispatch(addTodo(data))} >Add todo</button>

        </div>
    )
 }
 export default Home