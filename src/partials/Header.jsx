import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ data }) {
    console.log(data)
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/poriginal/${data.backdrop_path || data.poster_path || data.profile_path || data.logo_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            className='w-full h-[50vh] flex justify-end p-[5%]  flex-col '>

            <h1 className='text-5xl font-black text-white pb-4 w-[70%]'>
                {data.original_title || data.original_name || data.name}
            </h1>
            <p className='text-xl mb-8 text-white w-[70%]'>
                {data.overview.slice(0, 300)}... <Link className='text-blue-500' to={`/movie/${data.id}`}>Read More</Link>
            </p>
            <p className='flex items-center gap-2 text-white'>
                <i className=" text-yellow-200 ri-megaphone-fill"></i>{data.release_date}
                <i className=" text-yellow-200 ri-calendar-schedule-fill"></i>{(data.media_type).toUpperCase()}
                
                <Link to={`/watch/${data.id}`} className='text-blue-500'>
                    <i className="ri-arrow-right-up-line"></i>Watch Trailer
                </Link>
            </p>
        </div>
    )
}
