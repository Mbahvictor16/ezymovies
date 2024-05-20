import React, { Fragment } from 'react'
import SearchForm from './SearchForm'

function Form({type}) {
  return (
    <Fragment>
        {type == "search" && <SearchForm />}
    </Fragment>
  )
}

export default Form