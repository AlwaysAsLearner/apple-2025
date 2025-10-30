import React from 'react'
import Navbar from './sections/Navbar';

import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import Showcase from './sections/Showcase';
import Hero from './sections/Hero';
import ProductViewer from './sections/ProductViewer';
import Highlights from './sections/Highlights';
import Footer from './sections/Footer';
import Performance from './sections/Performance';
import Features from './sections/Features';
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App