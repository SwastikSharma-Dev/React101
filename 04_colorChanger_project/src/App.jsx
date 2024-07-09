import './App.css'
import { useState } from "react";

function App(){

const [colorValue, setColorValue] = useState('white');

    return(
        <>
        <div className="w-full h-screen"
        style={{backgroundColor:colorValue}}
        >
        
        <div className="fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-neutral-300 px-3 py-2 rounded-2xl border-2 border-black'>

            <button onClick={()=>setColorValue("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black'
            style={{backgroundColor:"red"}}
            >Red</button>

            <button onClick={()=>setColorValue("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black'
            style={{backgroundColor:"blue"}}
            >Blue</button>

            <button onClick={()=>setColorValue("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black'
            style={{backgroundColor:"green"}}
            >Green</button>

            <button onClick={()=>setColorValue("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-2 border-black'
            style={{backgroundColor:"yellow"}}
            >Yellow</button>

            <button onClick={()=>setColorValue("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg border-2 border-black'
            style={{backgroundColor:"white"}}
            >White</button>

            <button onClick={()=>setColorValue("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg border-2 border-black'
            style={{backgroundColor:"black"}}
            >Black</button>

            </div>
        </div>

        </div>
        </>
    )
}

export default App;