import { useState,useEffect } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Invitation from "./pages/Invitation.jsx"
import MosaicPhotos from './pages/MosaicPhotos.jsx'
import Gift from './pages/Gift.jsx'
import { Route } from 'react-router-dom'
import GuestList from './pages/GuestList.jsx'
import Loader from './components/Loader/Loader.jsx'
 
function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula un retraso de 3 segundos

    // Limpia el temporizador si el componente se desmonta antes de que el temporizador finalice
    return () => clearTimeout(timer);
  },[])

  if(isLoading){
    return <Loader  />
  }
  return (
    <div className="app">
      <Home />
      <MosaicPhotos />
      <Invitation />
      <Gift />
    </div>
  )
}

export default App
