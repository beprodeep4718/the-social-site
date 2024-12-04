import React from 'react'


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Imps from './pages/Imps';
import LogIn from './pages/LogIn';


const App = () => {
  const a = 10;
  const b = 20;
  return (
    <>

      {/* <h1 className='text-center'>Hello guyz</h1> */}
      <BrowserRouter>
        <Navbar det={a} det2={b} />
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/imps' element={<Imps />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App