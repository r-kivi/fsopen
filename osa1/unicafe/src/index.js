import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  if(props.text === "positive") {
    return (
        <>
        <td>{props.text}</td>
        <td>{props.value} % </td>
        </>
    )
  }
  return (
      <>
      <td>{props.text}</td>
      <td>{props.value}</td>
      </>
  )
}

const Statistics = (props) => {
  const good = props.good
  const bad = props.bad
  const neutral = props.neutral

  if (good === 0 && bad === 0 && neutral === 0) {
      return (
        <div>
          <h1>statistics</h1>
          <p>no feedback given</p>
        </div>
      )
  }
  return (
    
    <div>
    <h1>statistics</h1>
    <table>
    <tbody>
    <tr><StatisticLine text="good" value={good}/></tr>
    <tr><StatisticLine text="neutral" value={neutral}/></tr>
    <tr><StatisticLine text="bad" value={bad}/></tr>
    <tr><StatisticLine text="all" value={good + neutral + bad}/></tr>
    <tr><StatisticLine text="average" value={(good-bad) / (good + bad + neutral)}/></tr>
    <tr><StatisticLine text="positive" value={100*good/(good+bad+neutral)}/></tr>
    </tbody>
    </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Button handleClick={() => handleGoodClick()} text="good" />
      <Button handleClick={() => handleNeutralClick()} text="neutral" />
      <Button handleClick={() => handleBadClick()} text="bad" />
      
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>

    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)