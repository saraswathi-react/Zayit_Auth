import React, { Fragment, useLayoutEffect } from 'react'
import Routers from './routes'
import { useLocation } from 'react-router-dom'

const App = ({ token }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Fragment>
      <Routers token={token} />
    </Fragment>
  )
}

export default App
