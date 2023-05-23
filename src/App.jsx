
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'

import Works from './components/Works/Works'
import DarkMode from './components/DarkMode/DarkMode'


function App() {

  return (
    <>

      <HashRouter>
        <DarkMode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />

        </Routes>

      </HashRouter>
    </>





  )
}

export default App
