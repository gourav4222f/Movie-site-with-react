import React from 'react'
import Dropdown from './Dropdown'

export default function HorizontalCards({ data }) {
    return (
        
          
            <div className='w-full flex overflow-y-hidden px-5'>
                {data?.map((item, index) => (
                    <div key={index} className='min-w-[20%] h-full mr-5  bg-[#18181b] p-2 rounded-lg'>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path || item.backdrop_path || item.logo_path}`}
                            alt=""
                            className='w-full object-cover'
                        />
                        <div className='flex flex-col'>
                            <h1 className='text-xl font-black text-white'>{item.name || item.original_title || item.original_name}</h1>
                            <p className='mt-5 mb-5 text-white'>
                                {item.overview.length > 100 ? `${item.overview.substring(0, 100)}...` : item.overview}
                                <br></br>
                                <span className='text-zinc-400'>more info</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        
    )
}
