import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return(
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

const App = () => {
  return(
  <div>
    <p>Greetings</p>
    <Hello name="taneli"/>
    <Hello name="pekka"/>
    <Hello name=""/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))