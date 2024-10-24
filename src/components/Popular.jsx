import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../utils/axios'
import Loading from '../partials/Loading';
import Topnav from '../partials/Topnav';
import ReactInfiniteScroll from 'react-infinite-scroll-component';
import VerticalCards from '../partials/VerticalCards';
import Dropdown from '../partials/Dropdown';

export default function Popular() {
    const navigate = useNavigate();
    const [category, setCategory] = useState('movie')
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const getPopular = async () => {
        try {
            const { data } = await instance.get(`/${category}/popular?page=${page}`)

            console.log(data)
            if (data.results.length > 0) {
                setPopular(prev => [...prev, ...data.results])
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
        setPopular([])
        setPage(1)
        setHasMore(true)
    }

    useEffect(() => {
        referenceHandler()
        getPopular()
    }, [category])


    return popular.length > 0 ? (
        <div className=' w-screen h-screen'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-2xl text-zinc-400 font-semibold flex items-center gap-4 w-[10%]'>
                    <i onClick={() => navigate(-1)} className="hover:text-[#6556Cd] text-4xl font-semibold text-zinc-400 ri-arrow-left-line cursor-pointer"></i>
                    Popular
                </h1>
                <div className='w-[70%] h-full'><Topnav /></div>
                <div className='flex w-[20%] gap-6'>
                    <Dropdown title="category" options={['all', 'movie', 'tv']} func={(e) => setCategory(e)} />                  
                </div>
            </div>

            <ReactInfiniteScroll
                dataLength={popular.length}
                next={getPopular}
                hasMore={hasMore}
                loader={<h1>Loading...</h1>}
                endMessage={<h1>No more data to show</h1>}
            >
                <VerticalCards data={popular} title={category} />
            </ReactInfiniteScroll>
            
        </div>
    ) : (
        <Loading />
    )
}
