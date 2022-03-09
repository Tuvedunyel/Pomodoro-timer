import { useState, useEffect } from "react";
import EditTimer from "./components/EditTimer";
import Timer from "./components/Timer";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [secondes, setSecondes] = useState(0);
  const [progressStart, setProgressStart] = useState(0);
  const [progressEnd, setProgressEnd] = useState(0);
  const [degTravel, setDegTravel] = useState(360);
  const progressBar = document.querySelector(".outerRing");

  useEffect(() => {
    setMinutes(20);
    setSecondes(0);
  }, []);

  useEffect(() => {
    if (timerOn) {
      setTimeout(() => {
        setProgressEnd(minutes * 60 + secondes);
        setDegTravel(360 / (minutes * 60 + secondes));
        setProgressStart(progressStart + 1);
        handleCountdown();
      }, 1000);
    }
  }, [timerOn, minutes, secondes]);

  const handleCountdown = () => {
    progressBar.style.background = `conic-gradient(
      	#9d0000 ${(progressStart / 2) * degTravel}deg,
      	#17171a ${(progressStart / 2) * degTravel}deg
  		)`;
    if (progressStart == progressEnd) {
      progressBar.style.background = `conic-gradient(
				#00aa51 360deg,
				#00aa51 360deg
		  )`;
    }
    if (secondes > 0) {
      setSecondes(secondes - 1);
    } else if (minutes > 0) {
      setSecondes(59);
      setMinutes(minutes - 1);
    } else {
      setTimerOn(false);
    }
  };

  return (
    <div className='container'>
      <div className='outerRing'>
        <div className='timer'>
          <div id='time'>
            {isEditable ? (
              <EditTimer
                minutes={minutes}
                secondes={secondes}
                setMinutes={setMinutes}
                setSecondes={setSecondes}
              />
            ) : (
              <Timer minutes={minutes} secondes={secondes} />
            )}
          </div>
          <button className='startStop' onClick={() => setTimerOn(!timerOn)}>
            {timerOn ? "stop" : "start"}
          </button>
          <button
            className='settings'
            onClick={() => setIsEditable(!isEditable)}
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
