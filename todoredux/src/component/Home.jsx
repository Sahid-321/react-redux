import React,{useState} from 'react'
import { addTodo } from './action'
import { useDispatch, useSelector } from 'react-redux'
export default function Home() {
    const [input, setInput] = useState("")
const dispatch = useDispatch();
  return (
    <div>
        <input type='text'  placeholder='enter todo'  onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo(input))}>Add</button>
    </div>
  )
}
