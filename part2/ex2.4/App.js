import React from 'react'

const Course = (props) => {
  console.log('hi')
  const course = props.course
  return (
    <div>
      {course.map(course => 
        <div>
          <h1>{course.name}</h1>
          {course.parts.map(info => <p key = {info.id}>{info.name} {info.exercises}</p>)}
          <b>total of {course.parts.map(info => info.exercises).reduce((sum, current) => sum + current, 0)} exercises</b>
        </div>
      )}
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
  
  return (
    <Course course = {courses} />
  )
}

export default App
