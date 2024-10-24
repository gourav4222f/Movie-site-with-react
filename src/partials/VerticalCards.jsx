import React from 'react'
import { Link } from 'react-router-dom'

export default function VerticalCards({data}) {
  return (
    <div>
        {data.map((item)=>{
            return(
                <div key={item.id}>
                    <Link to={`/detail/${item.id}`}>
                        {item.name||item.title||item.original_name||item.original_title}
                    </Link>
                </div>
            )
        })}
    </div>
  )
}
