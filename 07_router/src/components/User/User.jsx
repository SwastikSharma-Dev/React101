import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
    const userid = params.userid || 0;
    // OR (ABOVE HAVE DEFAULT VALUE)
    // const {userid} = useParams()
  return (
    <div className='flex p-4 m-10 justify-center bg-white text-gray-600 font-bold text-3xl shadow-xl border-orange-600 border-4'>User: {userid}</div>
  )
}

export default User