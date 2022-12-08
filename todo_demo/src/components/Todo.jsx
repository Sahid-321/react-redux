import {useState} from "react"
const Todo = ()=>{

    const [inputValue, setInputValue] = useState("")
    return (
        <>
        <h2>Todo App</h2>
        <input type="text" placeholder="Enter Your Todo" 
        value={inputValue} 
         onChange={(event)=> setInputValue(event.target.value)}
         />
        <button>Add</button>
        </>
    )
}
export default Todo