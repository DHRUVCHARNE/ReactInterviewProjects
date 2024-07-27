import React, { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home/index'
import Details from './pages/details'
import Favorites from './pages/favorites'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path='/recipeItem/:id' element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App
