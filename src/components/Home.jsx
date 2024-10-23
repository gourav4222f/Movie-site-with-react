import React, { useState, useEffect } from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import instance from '../utils/axios'
import Header from '../partials/Header'
import HorizontalCards from '../partials/HorizontalCards'
import Dropdown from '../partials/Dropdown'
import Loading from '../partials/Loading'




export default function Home() {

    document.title = "Home"
    const [walpaper, setWalpaper] = useState(null)
    const [trending, setTrending] = useState(null)
    const [category, setCategory] = useState("all")


    const getWalpaper = async () => {
        try {
            const response = await instance.get(`/trending/all/day`)
            const Renderwalpaper = Math.floor(Math.random() * response.data.results.length)
            setWalpaper(response.data.results[Renderwalpaper])
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    const getTrending = async () => {
        try {
            const response = await instance.get(`/trending/${category}/day`)            
            setTrending(response.data.results)           
            
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    useEffect(() => {        
        getTrending()
        !walpaper && getWalpaper()
    }, [category])      


    return walpaper && trending ? (
        <>
            <Sidenav />
            <div className=' w-[80%] h-full overflow-auto overflow-x-hidden'>
                <Topnav />
                <Header data={walpaper} />


                <div className='mb-5 flex justify-between items-center px-5 pt-5'>
                    <h1 className='text-zinc-400 text-3xl font-semibold'>Trending</h1>

                    <Dropdown title="filter" options={['all', 'movie', 'tv']} func={setCategory} />                                       
                </div>
                <HorizontalCards data={trending} />
            </div>
        </>
    ) : (
        <>
            <Loading />
        </>
    )
}
