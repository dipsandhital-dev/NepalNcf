import About from '@/components/About'
import ChairmanMessage from '@/components/ChairmanMessage'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Objective from '@/components/Objective'
import TopBar from '@/components/TopBar'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <TopBar/>
      <Header/> 
      <Hero/>
      <About/>
      <ChairmanMessage/> 
      <Objective/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default HomePage
