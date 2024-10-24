import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../partials/Topnav'
import Dropdown from '../partials/Dropdown'
import instance from '../utils/axios'
import VerticalCards from '../partials/VerticalCards'
import Loading from '../partials/Loading'

export default function Trending() {
    const navigate = useNavigate()
    const [category, setCategory] = useState('all')
    const [duration, setDuration] = useState('week')
    const [trending, setTrending] = useState([])


    const getTrending = async () => {
        try {
            const response = await instance.get(`/trending/${category}/${duration}`)            
            setTrending(response.data.results)           
            
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    console.log(trending)

    useEffect(() => {
        getTrending()
    }, [category, duration])

    return trending.length > 0 ? (
        <div className='w-screen h-screen p-[1%]'>

            <div className=' w-full flex items-center justify-between '>
                <h1 className=' text-2xl text-zinc-400 font-semibold flex items-center gap-4 w-[10%]'>
                    <i onClick={() => { navigate(-1) }} className=" hover:text-[#6556Cd] text-4xl font-semibold text-zinc-400  ri-arrow-left-line cursor-pointer"></i>
                    Trending
                </h1>
                <div className=' w-[70%] h-full'><Topnav /></div>
                <div className='flex w-[20%] gap-6 '>
                    <Dropdown title="category" options={['all', 'movie', 'tv']} func={(e) => { setCategory(e) }} />                                        
                    <Dropdown title="duration" options={['week', 'day']} func={(e) => { setDuration(e) }} />
                </div>
            </div>

            <VerticalCards data={trending}/>


        </div>
    ) : (
        <Loading />
    )
}
