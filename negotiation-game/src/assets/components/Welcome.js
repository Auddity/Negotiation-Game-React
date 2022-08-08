import React from 'react'
import '../scss/_Welcome.scss'
// import { Link } from 'react-router-dom'

const Welcome = ({ startGame }) => {
  return (
    <main className='Welcome'>
      <div className="container">
        <h1>Welcome</h1>
        <p>Press 'Start Negotiating' to begin</p>
        {/* <Link> */}
        <button
          onClick={() => startGame()}
          >Start Negotiating</button>
        {/* </Link> */}
      </div>
    </main>
  )
}

export default Welcome