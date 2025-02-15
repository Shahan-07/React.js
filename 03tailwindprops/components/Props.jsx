import React from 'react'

function props({username,Text="visit me",Text2,Text3}) {
    return (
        <>
        
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src="https://images.pexels.com/photos/30577125/pexels-photo-30577125/free-photo-of-cherry-blossom-tree-in-full-bloom-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sunset in the mountains" className='mt-10 '/>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{username}</div>
        <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
    </div>
    <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Text}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Text2}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{Text3}</span>
    </div>
    </div>
        
        </>
    )
}

export default props
