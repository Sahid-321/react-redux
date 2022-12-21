
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeAll } from './action/index';

const  App= ()=> {
  const dispatch = useDispatch();
   const list = useSelector((state)=> state.TodoReducer.list)
  const [todoValue, setTodoValue] = useState('')
  console.log(todoValue);
  return (
    <div className="App">
    <input placeholder='Enter Task'
    value={todoValue} onChange={(event)=> setTodoValue(event.target.value)} />
  <button onClick={()=>dispatch(addTodo(todoValue), setTodoValue(''))} >ADD TODO</button>
   
   {
    list.map((elem)=>{
      return(
        <div key={elem.id}>
        <h3>{elem.data} <button onClick={()=> dispatch(deleteTodo(elem.id))}>Delete</button></h3>
        </div>
      )
    })
   }
   <button onClick={()=> dispatch(removeAll())}>Remove All</button>
    </div>
  );
}

export default App;
