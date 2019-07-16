//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  
  // Score tracking
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  // For tracking which quarter
  const [quarter, setQuarter] = useState(1);

  // For the timer
  const [secondOnes, setSecondOnes] = useState(0);
  const [secondTens, setSecondTens] = useState(0);
  const [minuteOnes, setMinuteOnes] = useState(0);
  const [minuteTens, setMinuteTens] = useState(0);
  const [active, setActive] = useState(false);

  // Functions for timer buttons
  function startTime(){
    setActive(true);
  }
  function pauseTime(){
    setActive(false);
  }
  function resetTime(){
    setSecondOnes(0);
    setSecondTens(0);
    setMinuteOnes(0);
    setMinuteTens(0);
  }
  // useEffect will run after the DOM has been loaded. setInterval inside it is used to update time values:
  useEffect(()=>{
    let secondsInterval = null; // why this line?
    if (active){
      const secondsInt = setInterval(()=>setSecondOnes(secondOnes+1), 1000);
    } else if (!active && secondOnes !== 0){
      clearInterval(secondsInterval)
    }
  })

  // To increment scores:
  function clickHandle(team, amount){
    if (team === 'home'){
      setHomeScore(homeScore + amount);
    } else if (team === 'away'){
      setAwayScore(awayScore + amount);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>

          <div className="timer-container">
            <div className="timer">{minuteTens}{minuteOnes}:{secondTens}{secondOnes}</div>
            <div className="timer-buttons">
              <button onClick={()=>{startTime()}}>Start</button>
              <button onClick={()=>{pauseTime()}}>Pause</button>
              <button onClick={()=>{resetTime()}}>Reset</button>
            </div>
          </div>

          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>

        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">3</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>
          </div>
        </div>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=>clickHandle('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>clickHandle('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>clickHandle('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>clickHandle('away', 3)}>Away Field Goal</button>
        </div>
        <div>
          <button className="resetButton" onClick={()=>{setHomeScore(0); setAwayScore(0)}}>Reset Score</button>
        </div>
      </section>
      <section className="buttons2">
        <div className="quarterButtons">
          <button onClick={()=>setQuarter(1)}>1</button>
          <button onClick={()=>setQuarter(2)}>2</button>
          <button onClick={()=>setQuarter(3)}>3</button>
          <button onClick={()=>setQuarter(4)}>4</button>
        </div>
      </section>
    </div>
  );
}


export default App;
