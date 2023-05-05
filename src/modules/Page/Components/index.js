/* eslint-disable */
import React from 'react'
import { Header } from './Partials/Header'
import { Footer } from './Partials/Footer'
import { Container_fluid } from '../../../components/Styles/BasicStyled'

const Page = ({children}) => {

  return (
    <Container_fluid>
      <Header/>
      {children}
      <Footer />
    </Container_fluid>
  )
}
export default Page
