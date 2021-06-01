import React from 'react'
import MainHeader from './MainHeader'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
