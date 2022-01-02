const Course = (props) => {
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

export default Course
