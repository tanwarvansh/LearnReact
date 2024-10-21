import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PropTypes from 'prop-types';
import { CORE_CONCEPTS } from './data';
import './App.css'

function Header(){
  return      ( <><div>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div><h1>Vite + React</h1></>

)
}

function CoreConcepts(props){
    return (
      <>
      <li>
        <img src="..." alt="..." />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>

      </>
    )
}

CoreConcepts.propTypes ={
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired
}

function App() {
  const [count, setCount] = useState(0)
  const message="Hello";

  return (
    <>
    <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {message}
      </p>
      <CoreConcepts  title ={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
      <CoreConcepts  title ={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
      <CoreConcepts  title ={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}/>
      <CoreConcepts  {...CORE_CONCEPTS[3]}/>
    </>
  )
}

export default App
