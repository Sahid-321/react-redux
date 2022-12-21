
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
  <button onClick={()=>dispatch(addTodo(todoValue))} >ADD TODO</button>
   
   {
    list.map((elem)=>{
      return(
        <div key={elem.id}>
        <h3>{elem.data}</h3>
        </div>
      )
    })
   }
    </div>
  );
}

export default App;
