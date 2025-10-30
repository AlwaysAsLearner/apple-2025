import React from 'react'
import Navbar from './sections/Navbar';

import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import Showcase from './sections/Showcase';
import Hero from './sections/Hero';
import ProductViewer from './sections/ProductViewer';
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  )
}

export default App