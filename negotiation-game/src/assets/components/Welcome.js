import React from 'react'

const Welcome = ({ startGame }) => {
  return (
    <main className='Welcome'>
      <div className="container">
        <h1>Welcome</h1>
        <p>Press 'Start Negotiating' to begin</p>
        <button
          onClick={() => startGame()}
        >Start Negotiating</button>
      </div>
    </main>
  )
}

export default Welcome