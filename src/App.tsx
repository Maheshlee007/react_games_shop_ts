import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Msh'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Message/>
    
    </div>
  )
}

export default App
