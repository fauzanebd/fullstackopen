import React from 'react'

const Header = () => {
  return React.createElement('h1', null, 'Half Stack application development')
}

const Part = (props) => {
  return React.createElement(
    'p',
    'null',
    props.part,
    ' ',
    props.exercises
  )
}

const Content = (props) => {
  var elements = []
  props.listOfCourses.forEach(
    (data) => {
      elements.push(
        React.createElement(
          Part,
          data
        )
      )
    }
  )
  return React.createElement(
    'div',
    null,
    elements
  )
}

const Total = (props) => {
  var total = 0
  props.listOfCourses.forEach(
    (course) => {
      total += course.exercises
    }
  )
  return React.createElement(
    'p',
    'null',
    'Number of exercises: ',
    total
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const listOfCourses = [
    {'part': 'Fundamentals of React', 'exercises': 10},
    {'part': 'Using props to pass data', 'exercises': 7},
    {'part': 'State of a component', 'exercises': 14},
  ]
  return(
    <div>
      <Header course={course}/>
      <Content listOfCourses={listOfCourses}/>
      <Total listOfCourses={listOfCourses}/>
    </div>
  )
}

export default App