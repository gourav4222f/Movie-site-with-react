import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from '../partials/Topnav';
import Dropdown from '../partials/Dropdown';
import instance from '../utils/axios';
import VerticalCards from '../partials/VerticalCards';
import Loading from '../partials/Loading';
import ReactInfiniteScroll from 'react-infinite-scroll-component';

export default function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState('all');
    const [duration, setDuration] = useState('week');
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch trending data from API
    const getTrending = async () => {
        try {
            const { data } = await instance.get(`/trending/${category}/${duration}?page=${page}`);
            
            if (data.results.length > 0) {
                setTrending((prev) => [...prev, ...data.results]);  // Append data
                setPage((prev) => prev + 1);  // Increment page
            } else {
                setHasMore(false);  // If no more data, stop fetching
            }

        } catch (error) {
            console.error('Error fetching trending data:', error);
            setHasMore(false);  // Stop fetching if error occurs
        }
    };

    // Reset trending data when category or duration changes
    const refreshHandler = () => {
        setTrending([]);  // Clear current trending data
        setPage(1);       // Reset to the first page
        setHasMore(true); // Ensure more data can be fetched
    };

    // Trigger data refresh when category or duration changes
    useEffect(() => {
        refreshHandler();  // Reset and fetch new data when category or duration changes
        getTrending();     // Fetch the first page of data
    }, [category, duration]);  // Triggers when category or duration changes

    return trending.length > 0 ? (
        <div className='p-[1%]'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-2xl text-zinc-400 font-semibold flex items-center gap-4 w-[10%]'>
                    <i onClick={() => navigate(-1)} className="hover:text-[#6556Cd] text-4xl font-semibold text-zinc-400 ri-arrow-left-line cursor-pointer"></i>
                    Trending
                </h1>
                <div className='w-[70%] h-full'><Topnav /></div>
                <div className='flex w-[20%] gap-6'>
                    <Dropdown title="category" options={['all', 'movie', 'tv']} func={(e) => setCategory(e)} />
                    <Dropdown title="duration" options={['week', 'day']} func={(e) => setDuration(e)} />
                </div>
            </div>

            <ReactInfiniteScroll
                dataLength={trending.length}  // Tracks the length of current data
                next={getTrending}            // Triggered when user scrolls down
                hasMore={hasMore}             // Determines whether to keep fetching more
                loader={<h1>Loading...</h1>}  // Loader while fetching more data
                endMessage={<h1>No more data to show</h1>}  // Message when no more data
            >
                <VerticalCards data={trending} title={category} />
            </ReactInfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
}
