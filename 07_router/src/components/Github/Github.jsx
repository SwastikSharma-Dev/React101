import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SwastikSharma-Dev').then(response => response.json())
    //     .then(data=>{
    //     console.log(data);
    //     setData(data);
    //     })
    // },[])
    return (
        <div className='flex p-4 m-10 justify-evenly content-evenly bg-white text-gray-600 font-bold text-3xl shadow-xl border-orange-600 border-4 flex-col items-center'>
            <img className='size-20' src={data.avatar_url} alt="Profile Image:" />
            <div>Name: {data.name}</div>
            <div className='flex flex-row gap-20'>
            <div>GitHub Followers: {data.followers}</div>
            <div>GitHub Following: {data.following}</div>
            </div>
            <div>Public Repos: {data.public_repos}</div>
            <div>Twitter Username: {data.twitter_username}</div>
            
        </div>
      )
}

export default Github

export const getGithubInfo = async() =>
{
    const response = await fetch('https://api.github.com/users/SwastikSharma-Dev');
    return response.json();
}