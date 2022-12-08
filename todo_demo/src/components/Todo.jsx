import {useState} from "react"
const Todo = ()=>{

    const [inputValue, setInputValue] = useState("")
    return (
        <>
        <h2>Todo App</h2>
        <input type="text" placeholder="Enter Your Todo" />
        <button>Add</button>
        </>
    )
}
export default Todo