import { useState } from 'react';
import './App.css';

function App() {
const [color,setcolor]=useState("Black")
  return (
    <div className="w-full h-screen"
    style={{backgroundColor:color}}
    >
      <div class="fixed bottom-6 flex flex-wrap justify-center bottom-12 inset-x-0 px-4" style={{backgroundColor:"black"}}>
      <div class="flex flex-wrap justify-center gap-3 shadow-lg">
      <button onClick={()=>setcolor("Red")} class="h-10 px-6 font-semibold rounded-md text-white" style={{backgroundColor:"red"}}>
          Red
        </button>
        <button onClick={()=>setcolor("Blue")} class="h-10 px-6 font-semibold rounded-md text-white" style={{backgroundColor:"Blue"}} >
          Blue
        </button>
        <button onClick={()=>setcolor("Yellow")} class="h-10 px-6 font-semibold rounded-md  text-white" style={{backgroundColor:"Yellow"}}>
        Yellow
        </button>
        <button onClick={()=>setcolor("Green")} class="h-10 px-6 font-semibold rounded-md  text-white" style={{backgroundColor:"Green"}} >
          Green
        </button>
        <button onClick={()=>setcolor("Purple")} class="h-10 px-6 font-semibold rounded-md  text-white" style={{backgroundColor:"Purple"}} >
          Purple
        </button>
        <button onClick={()=>setcolor("Skyblue")} class="h-10 px-6 font-semibold rounded-md  text-white" style={{backgroundColor:"Skyblue"}} >
        Skyblue
        </button>
        <button onClick={()=>setcolor("LightPink")} class="h-10 px-6 font-semibold rounded-md  text-white" style={{backgroundColor:"LightPink"}} >
        LightPink
        </button>
        <button onClick={()=>setcolor("Cyan")} class="h-10 px-6 font-semibold rounded-md  text-white" style={{backgroundColor:"Cyan"}} >
        Cyan
        </button>

      </div>
      </div>
   </div>
  );
}

export default App;
