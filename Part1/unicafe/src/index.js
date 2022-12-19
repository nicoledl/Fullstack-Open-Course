import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ values, setValues }) => {
  const fnButton = (text, handleClick) => {
    return <button onClick={handleClick}>{text}</button>
  }

  return (
    <div>
      {fnButton("good", () => setValues[0](values[0] + 1))}
      {fnButton("neutral", () => setValues[1](values[1] + 1))}
      {fnButton("bad", () => setValues[2](values[2] + 1))}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalCount = good + neutral + bad

  const fnStatistics = (text, value) => {
    return (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    )
  }

  if (totalCount === 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <table>
        {fnStatistics("good", good)}
        {fnStatistics("neutral", neutral)}
        {fnStatistics("bad", bad)}
        {fnStatistics("all", totalCount)}
        {fnStatistics("avarage", ((good + 0 - bad) / totalCount))}
        {fnStatistics("positive", (100 * good / totalCount) + "%")}
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give Feedback" />
      <Button values={[good, neutral, bad]} setValues={[setGood, setNeutral, setBad]} />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)