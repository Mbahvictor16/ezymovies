import React from 'react'
import MovieList from '../../components/MovieList/MovieList'
import Menu from '../../components/Menu/Menu'

function Categories() {
  return (
    <section className="mt-10 px-6">
      <h1 className="text-5xl md:text-7xl font-[950] mb-10 uppercase">Categories</h1>
      <Menu />
      <MovieList />
    </section>
  )
}

export default Categories