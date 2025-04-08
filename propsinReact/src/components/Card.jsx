import React from 'react'

function Card({username,Text,btnText,Text2,Text3}) {

return(
<div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full mt-10" src="https://images.pexels.com/photos/30577125/pexels-photo-30577125/free-photo-of-cherry-blossom-tree-in-full-bloom-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><h2>{username}</h2></div>
        <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <button className='bg-green-300 rounded-xl'>{btnText}</button>
    </div>
    <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Text}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Text2}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Text3}</span>
    </div>
    </div>
)
}

export default Card
