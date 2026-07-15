import React, { use, useEffect, useState } from 'react'
import Header from './component/header'
import Search from './component/search'
import Genre from './component/genre'
import Hero from './component/hero'
import Trend from './component/rowTrend'
import Popular from './component/popular'

const API_BASE_TMDB = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API

const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [movieData, setMovieData] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [genreList, setGenreList] = useState([])


  const fatchMovie = async () => {
    try {
      const endpoint = `${API_BASE_TMDB}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTION)

      setErrorMessage('')

      if (!response.ok) {
        throw new Error('Failed to fatching movie')
      }
      const data = await response.json()

      if (data.Response == 'False') {
        setErrorMessage[data.Error || "Failed to fatch movie"]
        setMovieList([])
        return
      }
      setMovieList(data.results)
    } catch (error) {
      console.error(`Failed fatching movie ${error}`)
      setErrorMessage('Error fatching Movie, Pleace try again later.')
    }
  }

  const fatchGenre = async () => {
    try {
      const endpoint = `${API_BASE_TMDB}/genre/movie/list`
      const response = await fetch(endpoint, API_OPTION)
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Failed to fatching genre')
      }

      setGenreList(data.genres)
    } catch (error) {
      console.error(`Failed fatching genre ${error}`)
      setErrorMessage('Error fatching Movie, Pleace try again later.')
    }
  }

  useEffect( () => {
    fatchMovie()
    fatchGenre()
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <Genre movieList={movieList} genreList={genreList}/>

      <main className='px-4 py-1 flex flex-col gap-3'>
        {errorMessage && <p className='text-danger'>{errorMessage}</p>}
        <section className=''>
          <Hero movie={movieList} genreList={genreList} />
        </section>
        <section className='pb-3 pt-1'>
          <Trend movieList={movieList} genreList={genreList} />
        </section>
        <section>
          <Popular movieList={movieList} genreList={genreList}/>
        </section>
      </main>
    </div>
  )
}

export default App