import React from 'react'

const Header = () => {
  return React.createElement('h1', null, 'Half Stack application development')
}

const Content = (props) => {
  return React.createElement(
    'p',
    'null',
    props.part,
    ' ',
    props.exercises
  )
}

const Total = (props) => {
  return React.createElement(
    'p',
    'null',
    'Number of exercises: ',
    props.total
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course={course}/>
      <Content part={part1} exercises={exercises1}/>
      <Content part={part2} exercises={exercises2}/>
      <Content part={part3} exercises={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App