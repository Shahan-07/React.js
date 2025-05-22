import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData] = useState([]);
    const data = useLoaderData();
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shahan-07')
    //     .then(response => response.json())
    //     .then(data =>{
    //       setData(data);
    //     })
    // }, [])

  return (
    <div className='text-center m-4 p-4 bg-gray-500 text-white'>
        Github Followers: {data.followers} <br />
        Github Followings: {data.following}
        <img src={data.avatar_url} alt="github pic" width={300} />
    </div>
  )
}

export default Github

export const githubLoader = async()=>{
  const response = await fetch('https://api.github.com/users/Shahan-07')
  return response.json();
}
