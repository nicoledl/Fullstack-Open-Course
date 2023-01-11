const Course = ({ courses }) => {


    return (
        <>
            {courses.map((course) => {
                const parts = course.parts
                return (
                    <>
                        <h2 key={course.id}>{course.name}</h2>
                        {parts.map((part) => <p key={parts.id}>{part.name} {part.exercises}</p>)}
                        <p><b>Total of {parts.reduce((acc, part) => acc + part.exercises, parts[0].exercises)} exercises.</b></p>
                    </>
                )
            }
            )
            }
        </>
    )
}

export default Course