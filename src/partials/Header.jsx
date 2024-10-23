import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ data }) {    
    return (
        <div key={data.id}
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path || data.logo_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"

            }}
            className='w-full h-[60vh] flex justify-end p-[5%]  flex-col gap-4 '>

            <h1 className='text-5xl font-black text-white pb-4 w-[70%]'>
                {data.original_title || data.original_name || data.name}
            </h1>
            <p className='text-lg mb-2 text-white w-[60%]'>
                {data.overview.slice(0, 300)}... <br></br> <Link className='text-[#6556Cd]' to={`/movie/${data.id}`}>Read More</Link>
            </p>
            <p className='flex text-lg items-center gap-2 text-white'>
                <i className=" text-yellow-400 ri-megaphone-fill"></i>{(data.release_date) ? data.release_date : "No information"}
                <i className=" text-yellow-400 ri-calendar-schedule-fill"></i>{(data.media_type) ? data.media_type.toUpperCase() : "No information"}
            </p>
            <span className='w-full flex '>
                <Link to={''} className='text-white flex items-center gap-2 px-4 py-2 bg-[#6556Cd] rounded-md'>
                    <i className="ri-arrow-right-up-line"></i>Watch Trailer
                </Link>
            </span>
        </div>
    )
}
