import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const RandomNumber = () =>
{
  return Math.floor(Math.random() * (anecdotes.length))
  
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
  const [score, setScore] = useState([0,0,0,0,0,0])
  const [index_of_max, setIndex] = useState(0)
  

  const HandleNext = () => {
    const nr = RandomNumber()
    setSelected(nr)

    const newscore = score[nr]
    setVotes(newscore)
  }
  

  const HandleVote = () => {
    setVotes(votes + 1)
    const copy = [...score]
    copy[selected] = copy[selected] + 1
    setScore([...copy])

    setIndex(copy.indexOf(Math.max(...copy)))
    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes} votes</p>

      <button onClick={HandleVote}>
        vote
      </button>

      <button onClick={HandleNext}>
        next anecdote
      </button>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[index_of_max]}</p>
      <p>Has {score[index_of_max]} votes</p>

      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
