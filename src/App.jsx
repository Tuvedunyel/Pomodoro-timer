import { useState } from 'react'
import EditTimer from './components/EditTimer'
import Timer from './components/Timer'

function App() {
  const [isEditable, setIsEditable] = useState(false)

  return (
    <div className="container">
      <h1>Hello World</h1>
      <div className="outerRing">
        <div className="timer">
          <div id="id">
            <EditTimer />
            <Timer />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default App
