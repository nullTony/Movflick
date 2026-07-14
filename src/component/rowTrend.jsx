import React from 'react'

const Trend = ({movieList, genreList}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <h2 className='text-lg'>Trending Now</h2>
            <a className='text-primary text-sm font-semibold' href="#">See all</a>
        </div>
        <div className='flex flex-1 gap-2  overflow-x-auto'>
             {movieList?.map( (movie) => {

                const genreName = genreList?.find(g => g.id === movie.genre_ids?.[0])?.name
                const year = movie.release_date?.split('-')[0]

                return (
                    <div 
                    key={movie.id}
                    className='flex flex-col bg-tabbar rounded-xl h-60 w-40 shrink-0 overflow-hidden'>
                        <div 
                        className='relative flex-1 bg-primary bg-center bg-cover'
                        style={{
                            backgroundImage: movie.poster_path
                                ? `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
                                : 'none'
                        }}>
                            <div className='absolute inset-x-0 top-0 flex items-start justify-between px-2 py-2'>
                                <span className='bg-base flex items-center gap-1 rounded-2xl py-0.5 px-2'>
                                    <img className='size-3' src="./src/assets/Movflick-selection.png" alt="" />
                                    <p className='text-xs font-semibold'>{movie.vote_average?.toFixed(1)}</p>
                                </span>
                                <button className='size-7 flex items-center justify-center rounded-full bg-base'>
                                    <svg className='size-4' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className=' px-2 py-2 '>
                            <h2 className='text-sm font-semibold'>{movie.title}</h2>
                            <div class="text-sm text-gray font-medium">{genreName} · {year}</div>
                        </div>
                    </div>
                )
             })}
        </div>
    </div>
  )
}

export default Trend