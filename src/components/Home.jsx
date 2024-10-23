import React, { useState, useEffect } from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import instance from '../utils/axios'
import Header from '../partials/Header'




export default function Home() {

    document.title = "Home"
    const [walpaper, setWalpaper] = useState(null)

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

    useEffect(() => {
        !walpaper && getWalpaper()
    }, [])



    return walpaper?(
        <>
            <Sidenav />
            <div className=' w-[80%] h-full'>
                <Topnav />
                <Header data={walpaper} />
            </div>
        </>
    ) : (
        <>
            <h1>Loading...</h1>
        </>
    )
}
