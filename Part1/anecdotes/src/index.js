import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClickFn }) => <button onClick={handleClickFn}>{text}</button>

const maxVotes = (anecdotes, maxPoint) => {
  return (
    <div>
      <p>{anecdotes[points.indexOf(maxPoint)]}</p>
      <p>has {maxPoint} votes</p>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [maxPoint, setMaxPoint] = useState(0)

  const random = () => Math.floor(Math.random() * anecdotes.length);

  const handleClickRandom = () => {
    setSelected(random)
  }

  const handleClickVote = () => {
    points[selected] += 1
    setMaxPoint(Math.max(...points))
  }

  if (maxPoint !== 0) {
    return (
      <div>
        <Title text="Anecdote of the day" />
        <p>{anecdotes[selected]}</p>
        <Button text="vote" handleClickFn={handleClickVote} />
        <Button text="next anecdotes" handleClickFn={handleClickRandom} />
        <Title text="Anecdote with most votes" />
        {maxVotes(anecdotes, maxPoint)}
      </div>
    )
  } else {
    return (
      <div>
        <Title text="Anecdote of the day" />
        <p>{anecdotes[selected]}</p>
        <Button text="vote" handleClickFn={handleClickVote} />
        <Button text="next anecdotes" handleClickFn={handleClickRandom} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)