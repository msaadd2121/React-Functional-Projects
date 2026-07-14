import { useState } from 'react'
import './App.css'
import WeatherData from './components/Weather/Weather'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherData/>
      
    </>
  )
}

export default App
