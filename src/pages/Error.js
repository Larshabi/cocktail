import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='erro-page section'>
      <div className='error-container'>
        <h1>Ooops! It is a dead end</h1>
        <Link to='/' className='btn btn-primary'>back home</Link>
      </div>
    </section>
  )
}

export default Error
