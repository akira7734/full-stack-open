import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(null)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const voteForAnecdote = () => {
    const updatedVotes = [...votes] // make a copy of votes
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const getMostVotedIndex = () => {
    const maxVotes = Math.max(...votes)
    return votes.indexOf(maxVotes)
  }

  const mostVotedIndex = getMostVotedIndex()

  return (
    <div style={{ padding: '1rem', border: '4px solid green', fontFamily: 'sans-serif' }}>
      <h1>Anecdote of the Day</h1>

      <button style={{ border: '2px solid green', backgroundColor: 'lavender' }} onClick={nextAnecdote}>Next Anecdote</button>

      {selected !== null && (
        <>
          <blockquote style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            "{anecdotes[selected]}"
          </blockquote>
          <p>Has {votes[selected]} votes</p>
          <button style={{ border: '2px solid green', backgroundColor: 'lavender' }} onClick={voteForAnecdote}>Vote</button>
        </>
      )}
      
      <hr style={{ margin: '2rem 0 1rem', height: '4px', border: 'none', backgroundColor: 'green'}} />

      <h2>Anecdote with Most Votes</h2>
      {votes[mostVotedIndex] === 0 ? ( // Conditional rendering expression. If true, execute code before colon; if false, execute code after colon
        <p>No votes yet.</p>
      ) : (
        <>
          <blockquote style={{ fontStyle: 'italic' }}>
            "{anecdotes[mostVotedIndex]}"
          </blockquote>
          <p>Has {votes[mostVotedIndex]} votes</p>
        </>
      )}
    </div>
  )
}

export default App