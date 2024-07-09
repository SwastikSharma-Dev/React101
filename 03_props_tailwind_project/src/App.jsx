import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <h1 className='bg-orange-400 text-black p-4 rounded-xl mb-4'>Swastik ViteReact+Tailwind</h1>
      {/* <Card product="Macbook" button="checkout now"/>
      <Card product="Windows Laptop" button="buy now"/> */}
      <div className='flex space-x-4'>
      <Card productName="Macbook" buttonName="checkout now"/>
      <Card productName="Windows Laptop" buttonName="buy now"/>
      <Card />
      </div>
    </>
  )
}

export default App
