import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center py-4 px-4'>
        <nav className='flex w-full justify-between'>
            <div className="flex gap-2">
                <div className='w-7 h-7 rounded-lg bg-primary flex justify-center items-center'>
                    <img className='w-4 h-4' src="./src/assets/Movflick-logo.png" alt="" />
                </div>
                <span className='text-white text-xl font-extrabold'>Mov<b className='text-primary lowercase'>Flick</b></span>
            </div>

            <ul className='hidden'>
                <li>Home</li>
                <li>Movies</li>
                <li>Favorites</li>
            </ul>

            <div className="search hidden">
                <input type="text" placeholder='Search movies...' />
            </div>

            <div className='w-8 h-8 cursor-pointer rounded-4xl gradient-brand flex justify-center items-center'>
                <p className='text-xs font-bold uppercase'>jd</p>
            </div>
        </nav>
    </header>
  )
}

export default Header