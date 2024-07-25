import './App.css'
import Login from './components/Login'
import User from './components/User'
import UserContextProvider from './context/UserContextProvider'


function App() {


  return (

          <UserContextProvider>
            <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                <Login/>
                <User/>
            </div>
          </UserContextProvider>

  )
}

export default App
