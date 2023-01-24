import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Allroutes from "./components/Allroutes"
import Home from "./pages/home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Allroutes />
    </div>
  )
}

export default App
