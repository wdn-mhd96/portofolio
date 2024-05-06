import { useState } from 'react'
import Base from './Layout/base'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Project from './pages/project'
import Contact from './pages/contact'

function App() {
  document.title = "Muhammad WIldani"
  const [count, setCount] = useState(0)
  return (
    <>
      <Base>
        <div className="main">
        <div id="home" className="main-content">
          <Home />
        </div>
        <div id="about" className="main-content">
          <About/>
        </div>
        <div id="project" className="main-content">
          <Project />
        </div>
        <div id="contact" className="main-content">
          <Contact/>
        </div>
        </div>
      </Base>
    </>
  )
}

export default App
