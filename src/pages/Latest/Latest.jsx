import React from 'react'
import MovieList from '../../components/MovieList/MovieList'

function Latest() {
  return (
    <section className="mt-10 px-6">
      <h1 className="text-5xl md:text-7xl font-[950] mb-10 uppercase">Latest</h1>
      <MovieList />
    </section>
  )
}

export default Latest