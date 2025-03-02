import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Createblog from './pages/Createblog'
import Notfound from './pages/Notfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/blog/:id' element={<Blog/>}></Route>
          <Route path='/create' element={<Createblog/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
