import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Category from '../category/Category'
import Values from '../values/Values'
import Products from '../products/Products'
import Discount from '../discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../testimonials/Testimonials'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Values/>
      <Products/>
      <Discount/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home