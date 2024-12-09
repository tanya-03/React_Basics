import './App.css';
import {useState} from 'react'

function App() {
  let[counter,setCounter]=useState(1);
  const addvalue = () => {
   // counter++;
   setCounter(counter+1)
    console.log('add clicked',counter);
  }

  const removevalue=()=>{
    // counter--;
    setCounter(counter-1)
    console.log('remove clicked',counter);
  }

  return (
    <div className="App">
     <h1>Counter</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addvalue}>Add Value </button>
     <button onClick={removevalue}>Remove Value </button>
    </div>
  );
}

export default App;
