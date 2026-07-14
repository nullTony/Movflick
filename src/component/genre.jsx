import React from 'react'

const Genre = ({movieList, genreList}) => {
    const genre = movieList.flatMap(movie => movie.genre_ids)
    const id = [...new Set(genre)]

    const genreFilter = genreList.filter(genre => id.includes(genre.id))

    
  return (
    
    <div className='px-4 py-4  overflow-x-auto scrollbar-hide'>
        <ul className='flex gap-3 items-center text-sm font-semibold'>
            <span className='px-4 py-2 text-sm rounded-3xl bg-primary'>All</span>
            {genreFilter.map(genre => (
                <li key={genre.id} className='bg-card px-4 py-2 rounded-3xl whitespace-nowrap'>{genre.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Genre