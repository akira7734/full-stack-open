import { useState } from 'react'

const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatLine = ({ stat, num, tag }) => {
  return (
    <tr>
      <td>{stat}</td>             {/* First column: the name of the stat */}
      <td>{num}{tag || ''}</td>   {/* Second column: the value + optional tag */}
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const avg = (good - bad) / total
  const positive = good / total

  return (
    <table>
      <tbody>
        <StatLine stat='good ' num={good} />
        <StatLine stat='neutral ' num={neutral} />
        <StatLine stat='bad ' num={bad} />
        <StatLine stat='average ' num={(avg).toFixed(2)} />
        <StatLine stat='positive ' num={(positive * 100).toFixed(2)} tag='%' />
      </tbody>
    </table>
  )
}

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => setGood(good + 1)
  const neutralReview = () => setNeutral(neutral + 1)
  const badReview = () => setBad(bad + 1)

  return (
    <div>
      <Header title='Give Feedback' />
      <Button onClick={goodReview} text='good' />
      <Button onClick={neutralReview} text='neutral' />
      <Button onClick={badReview} text='bad' />

      <Header title='Statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

  )
}

export default App