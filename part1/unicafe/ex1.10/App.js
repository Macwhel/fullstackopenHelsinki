import React, { useState } from 'react'

const StatisticsLine = (props) => {
  return (
    <tr>{props.text} {props.value}</tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
          <StatisticsLine text = 'good' value = {props.good}/>
          <StatisticsLine text = 'neutral' value = {props.neutral}/>
          <StatisticsLine text = 'bad' value = {props.bad}/>
          <StatisticsLine text = 'all' value = {total}/>
          <StatisticsLine text = 'average' value = {(props.good - props.bad)/ total}/>
          <StatisticsLine text = 'positive' value = {props.good / total}/>
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
