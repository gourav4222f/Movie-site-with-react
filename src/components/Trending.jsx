import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../partials/Topnav'
import Dropdown from '../partials/Dropdown'

export default function Trending() {
    const navigate = useNavigate()
    return (
        <div className='w-screen h-screen p-[3%]'>
            <div className=' w-full flex items-center justify-between'>
                <h1 className=' text-2xl text-zinc-400 font-semibold '>
                    <i onClick={() => { navigate(-1) }} className=" hover:text-[#6556Cd] font-semibold text-zinc-400  ri-arrow-left-line cursor-pointer"></i>
                    Trending
                </h1>
                <div><Topnav /></div>
                <div className='flex '>
                    <Dropdown title="category" options={['all', 'movie', 'tv']} func={() => { }} />
                    <div className='w-[2%]  bg-red-200'></div>
                    <Dropdown title="duration" options={['week', 'day']} func={() => { }} />
                </div>
            </div>
        </div>
    )
}
