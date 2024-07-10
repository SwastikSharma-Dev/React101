import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberUse, setNumberUse] = useState(false)
  const [symbolUse, setSymbolUse] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>
    {
      let pass = ""
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(numberUse) str += "0123456789"
      if(symbolUse) str += "!@#$%^&*()_+"

      for(let i=0; i<=length; i++ )
      {
        let index = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(index)
      }

      setPassword(pass)
  
    }, [length,numberUse,symbolUse,setPassword])

  useEffect(() => {
    passwordGenerator()}, [length, numberUse, symbolUse, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,length+1);
    window.navigator.clipboard.writeText(password)
    window.alert("Copied!")
  },[password])

 
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-80 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={5}
        max={25}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberUse}
          id="numberInput"
          onChange={() => {
              setNumberUse((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={symbolUse}
              id="characterInput"
              onChange={() => {
                  setSymbolUse((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  )
}

export default App
