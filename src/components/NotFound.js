import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const [load, upadateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="App" id={load ? 'no-scroll' : 'scroll'}>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the index page</Link>
    </div>
  )
}

export default NotFound
