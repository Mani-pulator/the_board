import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Booklet from './components/booklet/Booklet';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar userName="Simran Panthi" onPostEvent={() => {}} />
      <Booklet/>
    </>
  )
}

export default App
