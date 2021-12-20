import React, { useState } from 'react'

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
      <table>
        <tbody>
          <tr>good {good}</tr>
          <tr>neutral {neutral}</tr>
          <tr>bad {bad}</tr>
          <all>all {(good + neutral + bad)}</all>
          <tr>average {(good - bad)/(good + neutral + bad)}</tr>
          <tr>positive {(good * 100) / (good + neutral + bad)} %</tr>
        </tbody>
      </table>

    </div>
  )
}

export default App
