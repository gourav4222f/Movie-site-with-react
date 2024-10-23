import React, { useState, useEffect } from 'react'
import instance from '../utils/axios'
import { Link } from 'react-router-dom'

export default function Topnav() {

    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState(null);

    const Getsearches = async () => {
        try {
            const response = await instance.get(`/search/multi?query=${query}`)
            setSearches(response.data.results)
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    useEffect(() => {
        Getsearches()
    }, [query])


    return (
        <div className='w-full h-[10vh] relative flex justify-start ml-[20%] items-center'>
            <i className="ri-search-line text-3xl text-zinc-400 cursor-pointer"></i>
            <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                type="text" placeholder='Search for movies, tv shows, people...' className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-300' />
            {!query ? "" : <i onClick={() => setQuery("")} className="cursor-pointer ri-close-fill text-3xl text-zinc-400"></i>}

            <div className='w-[60%] max-h-[50vh] bg-[#f1f1f1] absolute top-[90%] overflow-auto rounded'>

                {searches?.length === 0 && query !== "" ?
                    (
                        <Link
                            className='p-10 w-full flex justify-start items-center border-b-2 border-zinc-100 ' to="/">
                            <div className='ml-4 w-full flex justify-center items-center'>
                                <img src="https://cdn.dribbble.com/userupload/2905353/file/original-2022966da1fc3718d3feddfdc471ae47.png?resize=400x0" alt="" className=' object-cover' />
                            </div>
                        </Link>
                    ) :
                    searches?.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                className='p-10 w-full flex justify-start items-center border-b-2 border-zinc-100 text-zinc-600 font-semibold hover:bg-zinc-300 hover:text-zinc-900 duration-200' to="/">
                                <img src={(item.poster_path || item.profile_path || item.backdrop_path || item.logo_path) ? `https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path || item.backdrop_path || item.logo_path}` : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`} alt='' className='h-[10vh] w-[10vh] rounded object-cover mr-5' />
                                <div className='ml-4'>
                                    <span className='text-lg font-semibold'>{item.original_title || item.original_name || item.name}</span>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div>

    )
}


// 