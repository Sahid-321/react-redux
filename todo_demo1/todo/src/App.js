import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const [todoValue, setTodoValue] = useState('')
  return (
    <div className="App">
    <input placeholder='Enter Task'
    value={todoValue} onChange={(e)=> setTodoValue(e.target.value)} />
    </div>
  );
}

export default App;
