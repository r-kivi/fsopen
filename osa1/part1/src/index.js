import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    const bornYear = () => {
      const YearNow = new Date().getFullYear()
      return YearNow-props.age
    }

    return(
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>You were probably born {bornYear()}</p>
      </div>
    )
  
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))