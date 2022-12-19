import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (<div>{props.course}</div>)

const Content = (props) => {
  return (
    <div>
      {props.content.map(elem => <p>{elem.name} {elem.exercises}</p>)}
    </div>)
}

const Total = (props) => {
  return(<p>Number of exercise {props.total.reduce((acc, cur) => acc + cur.exercises, 0)} </p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))