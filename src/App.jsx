import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Allroutes from "./components/Allroutes"
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Allroutes />
    </div>
  )
}

export default App
