import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function User() {

    const {user} = useContext(UserContext)

    if(!user) return (
  <div className='text-2xl font-bold text-white mt-6'>No User</div>
);

return (
    <div>
          <h2 className='text-2xl font-bold text-white mt-6'>
    Hello {user.username}, your Password is {user.password}
  </h2>
    </div>

);

}

export default User