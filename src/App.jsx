import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Invitation from "./pages/Invitation.jsx"
import MosaicPhotos from './pages/MosaicPhotos.jsx'
import Gift from './pages/Gift.jsx'
import { Route } from 'react-router-dom'
import Form from './pages/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Home />
        
      <Invitation />
      <MosaicPhotos />
      <Gift />
    
    </div>
  )
}

export default App
