import React from 'react'

const Course = (props) => {
  const course = props.course
  const inside = course.parts
  let total = inside.map(info => info.exercises).reduce((sum, current) => sum + current, 0)
  return (
    <div>
      <h1>{course.name}</h1>
      {inside.map(info => <p key = {info.id}>{info.name} {info.exercises}</p>)}
      <b>total of {total} exercises</b>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (<Course course={courses} />)
}

export default App
