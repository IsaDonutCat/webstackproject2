import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function querying()
{
  const SUPABASE_URL = "https://byyqrzsfnteoqtxtjuhp.supabase.co";
  const SUPABASE_KEY = "sb_publishable_wZ7Og9UpSIzd6u9AwS_AMg_U9LvEnUU";
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const html = "<table>";
  
}

function App() {
  const [count, setCount] = useState(0)
  
  console.log("connected to supabase");

  
  
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

export default App
