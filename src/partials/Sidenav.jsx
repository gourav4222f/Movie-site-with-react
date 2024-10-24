import React from 'react'
import { Link } from 'react-router-dom'


export default function Sidenav() {



    return (

        <div className='w-[20%]  h-full border-r-2 border-zink-200/90 p-10'>
            <div className='w-[20%]  h-full border-r-2 border-zink-200/90 p-10 fixed top-0 left-0'>

                <h1 className='text-[#6556Cd] text-2xl ml-20 py-2'>
                    <i className="ri-tv-line"></i>
                    <span>-GKT-||-4222f</span>
                </h1>
                <nav className='flex flex-col text-zink-400 gap-2 text-white'>
                    <h1 className='text-2xl font-semibold mt-10 mb-5'>New Feed</h1>
                    <Link to={'/trending'} className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' ><i className="ri-fire-fill"></i> Trending</Link>
                    <Link to={'/Popular'} className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' ><i className="mr-2 ri-sparkling-fill"></i>Popular</Link>
                    <Link to={"/movies"} className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' ><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
                    <Link to={"/tv"} className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' ><i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
                    <Link className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' to="/"><i className="mr-2 ri-team-fill"></i>People</Link>
                </nav>
                <hr className='border h-[1px] bg-zink-400' />
                <nav className='flex flex-col text-zink-400 gap-2 text-white'>
                    <h1 className='text-2xl font-semibold mt-10 mb-5'>Website Information</h1>
                    <Link className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' to="/"><i className="ri-phone-fill"></i> Contact Us</Link>
                    <Link className='hover:bg-[#6556Cd] p-5 text-lg hover:text-white rounded-lg duration-300' to="/"><i className=" mr-2 ri-information-2-fill"></i>About Us</Link>
                </nav>
            </div>
        </div>
    )
}
