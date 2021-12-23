import React from 'react'

const Course = (props) => {
  const course = props.course
  const inside = course.parts
  let total = 0
  inside.forEach(item => total = total + item.exercises)
  return (
    <div>
      <h1>{course.name}</h1>
      {inside.map(info => <p key = {info.id}>{info.name} {info.exercises}</p>)}
      <b>total of {total} exercises</b>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
