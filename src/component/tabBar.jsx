import { useState } from "react"
import React from 'react'

const TabBar = () => {
    const buttons = [
        {
            id: 1,
            text: 'home',
            svg: (
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            ),
        },
        {
            id: 2,
            text: 'search',
            svg: (
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
            ),
        },
        {
            id: 3,
            text: 'favorites',
            svg: (
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            ),
        },
        {
            id: 4,
            text: 'profile',
            svg: (
            <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            ),
        },
    ]
    const [selectedBar, setSelectedBar] = useState(buttons[0].id)
    return (
        <div className='fixed w-full bottom-0 flex justify-between bg-tabbar px-2 py-1'>

            {buttons.map((btn) => {
                return (
                    <button
                    key={btn.id}
                    className={`w-20 py-2 flex items-center justify-center flex-col gap-1 cursor-pointer ${
                        selectedBar === btn.id ? 'text-primary' : 'text-muted'
                    }`}
                    onClick={() => setSelectedBar(btn.id)}>
                        {btn.svg}
                        <p className='text-xs font-medium capitalize'>{btn.text}</p>
                    </button>
                )
            })}

        </div>
    )
}

export default TabBar