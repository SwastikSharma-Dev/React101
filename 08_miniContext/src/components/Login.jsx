import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const {setUser} = useContext(UserContext)


const submitData = (e) => {
e.preventDefault()
setUser({username, password})
}

  return (
<div>

  <h2 className='text-3xl font-bold text-white mb-6'>USER:</h2>

  <div className='bg-white p-8 rounded-lg shadow-lg'>
    <input 
      type="text" 
      placeholder='Username' 
      value={username} 
      onChange={(e) => setUsername(e.target.value)} 
      className='w-full p-2 mb-4 border-b-2 border-blue-500 focus:outline-none focus:border-purple-500'
    />
    <input 
      type="password" 
      placeholder='Password' 
      value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      className='w-full p-2 mb-4 border-b-2 border-blue-500 focus:outline-none focus:border-purple-500'
    />
    <button 
      className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-purple-500 transition duration-300' 
      onClick={submitData}
    >
      Submit
    </button>
  </div>

</div>

  )
}

export default Login