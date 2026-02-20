import { useState } from 'react'
import './index.css'
import Navbar from './components/common/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar userName="Simran Panthi" onPostEvent={() => {}} />
    </>
  )
}

export default App
