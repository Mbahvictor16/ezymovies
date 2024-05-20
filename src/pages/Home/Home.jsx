import React from 'react'
import Form from '../../components/Form/Form'
import TopMovies from '../../components/TopMovies/TopMovies'

const Home = () => {
  return (
    <section className='px-4 py-8 md:px-6 md:py-10 lg:py-12 lg:px-10'>
      <h3 className='text-2xl font-bold md:text-4xl lg:text-6xl'>Discover, stream and download exciting movies today.</h3>

      <Form type="search" />

      <TopMovies />
    </section>
  )
}

export default Home