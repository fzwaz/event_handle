import React from 'react'
import EventDetails from './component/EventDetails'
import Footer from './component/Footer'
import Header from './component/header'
import Schedule from './component/Schedule'

function App() {
  return (
    <section>
      <Header/>
      <EventDetails/>
      <Schedule/>
      <Footer/>
    </section>
  )
}

export default App