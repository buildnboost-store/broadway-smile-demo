import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Broadway Smile Demo</h1>
        <p>Welcome to the portfolio showcase</p>
      </header>
      <main>
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </main>
    </div>
  )
}

export default App
