import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../utils/axios'
import Loading from '../partials/Loading';
import Topnav from '../partials/Topnav';
import ReactInfiniteScroll from 'react-infinite-scroll-component';
import VerticalCards from '../partials/VerticalCards';
import Dropdown from '../partials/Dropdown';

export default function TvShow() {
    const navigate = useNavigate();
    const [category, setCategory] = useState('airing_today')
    const [shows, setShows] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const getShows = async () => {
        try {
            const { data } = await instance.get(`tv/${category}?page=${page}`)

            console.log(data)
            if (data.results.length > 0) {
                setShows(prev => [...prev, ...data.results])
                setPage(prev => prev + 1)
            } else {
                setHasMore(false)
            }


        } catch (error) {
            console.log(error)
            throw error
        }
    }

    const referenceHandler = (e) => {
        setShows([])
        setPage(1)
        setHasMore(true)
    }

    useEffect(() => {
        referenceHandler()
        getShows()
    }, [category])


    return shows.length > 0 ? (
        <div className=' w-screen h-screen'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-2xl text-zinc-400 font-semibold flex items-center gap-4 w-[10%]'>
                    <i onClick={() => navigate(-1)} className="hover:text-[#6556Cd] text-4xl font-semibold text-zinc-400 ri-arrow-left-line cursor-pointer"></i>
                    TV Shows
                </h1>
                <div className='w-[70%] h-full'><Topnav /></div>
                <div className='flex w-[20%] gap-6'>
                    <Dropdown title="category" options={['airing_today', 'on_the_air', 'popular', 'top_rated']} func={(e) => setCategory(e)} />                  
                </div>
            </div>

            <ReactInfiniteScroll
                dataLength={shows.length}
                next={getShows}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                endMessage={<h1>No more data to show</h1>}
            >
                <VerticalCards data={shows} title={category} />
            </ReactInfiniteScroll>
            
        </div>
    ) : (
        <Loading />
    )
}
