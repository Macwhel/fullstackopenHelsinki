import React, { useState } from 'react'

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  return (
    <table>
        <tbody>
          <tr>good {props.good}</tr>
          <tr>neutral {props.neutral}</tr>
          <tr>bad {props.bad}</tr>
          <all>all {total}</all>
          <tr>average {(props.good - props.bad)/ total}</tr>
          <tr>positive {props.good / total}</tr>
        </tbody>
      </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <p>
        <button onClick = {() => setGood(good + 1)}>good</button>
        <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick = {() => setBad(bad + 1)}>bad</button>
      </p>
      <h2>Statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>

    </div>
  )
}

export default App
