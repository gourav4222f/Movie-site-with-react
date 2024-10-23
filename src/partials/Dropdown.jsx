import React from 'react'

export default function Dropdown({ title, options, func }) {
    return (
        <div className='select'>
            <select defaultValue="" name="format" id="format" onChange={e => func(e.target.value)}>
                <option value="" disabled>
                    {title.toUpperCase()}
                </option>
                {options?.map((item, index) => (
                    // Set the value to the item instead of the index
                    <option key={index} value={item}>{item.toUpperCase()}</option>
                ))}
            </select>
        </div>
    )
}
