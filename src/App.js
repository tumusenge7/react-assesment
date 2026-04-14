import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Modules from './Modules'
import Aboutus from './Aboutus'
import Exam from './Exam'
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/modules'>Modules</Link>
          <Link to='/exam'>Exam</Link>
          <Link to='/Aboutus'>About us</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Modules' element={<Modules />} />
          <Route path='/Exam' element={<Exam />} />
          <Route path='/Aboutus' element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App