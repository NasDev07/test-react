import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeddingAnnouncement from './layouts/WeddingAnnouncement'
import GalleryPage from './layouts/GalleryPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeddingAnnouncement />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
