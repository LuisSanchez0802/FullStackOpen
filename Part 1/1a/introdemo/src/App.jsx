const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part} exercise={props.exercises}/>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  const a = props.part1
  const b = props.part2
  const c = props.part3
  return (
    <div>
      <p>
        The total number of exercises is {a+b+c}
      </p>
    </div>
  )
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
  
  
  return(
    <div>
      <Header course={course.name}/>
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Content part={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Content part={course.parts[2].name} exercises={course.parts[2].exercises}/>
      <Total part1={course.parts[0].exercises} part2={course.parts[1].exercises} part3={course.parts[2].exercises}/>
    </div>
  )
}

export default App
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
