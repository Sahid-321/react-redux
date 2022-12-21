
import './App.css';
import { useState } from 'react';



const  App= ()=> {

  const [todoValue, setTodoValue] = useState('')
  console.log(todoValue);
  return (
    <div className="App">
    <input placeholder='Enter Task'
    value={todoValue} onChange={(event)=> setTodoValue(event.target.value)} />
  <button>ADD TODO</button>
    </div>
  );
}

export default App;
