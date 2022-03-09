import { useState } from 'react'
import EditTimer from './components/EditTimer'
import Timer from './components/Timer'

function App() {
  const [isEditable, setIsEditable] = useState(false)

  return (
    <div className="container">
      <div className="outerRing">
        <div className="timer">
          <div id="time">
            {isEditable ? <EditTimer /> : <Timer />}
          </div>
          <button className='startStop'>start</button>
        </div>
      </div>
    </div>
  )
}

export default App
