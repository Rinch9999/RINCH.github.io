import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Characters from './pages/Characters.jsx'
import Timeline from './pages/Timeline.jsx'
import Episodes from './pages/Episodes.jsx'
import Locations from './pages/Locations.jsx'
import BeatNolan from './pages/BeatNolan.jsx'

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content-wrapper">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/beat-nolan" element={<BeatNolan />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App