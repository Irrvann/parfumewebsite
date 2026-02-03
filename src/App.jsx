import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Why from './components/Why'
import ProductList from './components/ProductList'
import CTA from './components/CTA'
import SocialProof from './components/SocialProof'

function App() {
  return (
    <div className="app-root">
      <Hero />
      <Why />
      <ProductList />
      <CTA />
      <SocialProof />
      <footer className="site-foot">
        <div className="container">© {new Date().getFullYear()} Men Parfume — All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
