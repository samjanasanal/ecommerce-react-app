import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import "./App.css"
import { ProductProvider } from './context/ProductContext'

function App() {

  return (
    <>
     <Router>
      <ProductProvider>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ProductProvider>
    </Router>
      
    </>
  )
}

export default App
