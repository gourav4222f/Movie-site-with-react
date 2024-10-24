import React from 'react';
import { Link } from 'react-router-dom';

export default function VerticalCards({ data, title }) {
    return (
        <div className='flex flex-wrap justify-center gap-4'>
            {data.map((item) => {
                return (
                    <Link className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6' to={`/detail/${item.id}`} key={item.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.profile_path || item.backdrop_path || item.logo_path}`}
                            alt={item.name || item.title || item.original_name || item.original_title}
                            className='object-cover h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]'
                        />
                        <h1 className='text-xl text-zinc-200 mt-5 font-semibold'>
                            {item.name || item.title || item.original_name || item.original_title}
                        </h1>
                    </Link>
                );
            })}
        </div>
    );
}
