import { useState } from "react"

function App() {

  let [no_of_mangoes, setNo_of_Mangoes] = useState(10) // Initially 10 Mangoes
  const addMango = () => {
    setNo_of_Mangoes(no_of_mangoes + 1)
  }
  const removeMango = () => {
    if(no_of_mangoes==0)
      {
          alert("Can't Go Negative.")
      }
      else
      {
    setNo_of_Mangoes(no_of_mangoes - 1)
      }
  }

  return (
    <>
      <h1>No of Mangoes: {no_of_mangoes}</h1>
      <p>The total number of Mangoes are {no_of_mangoes}</p>
      <br />
      <button onClick={addMango}>Add 1 Mango</button>
      <br />
      <button onClick={removeMango} >Remove 1 Mango</button>
      </>
  )

}

export default App
