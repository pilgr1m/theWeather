import React from 'react'
import Forecast from "./components/Forecast/"
import './App.css'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> WEZER -Weather app</h1>
      </header>

      <main className="App-main">
        <Forecast />
      </main>

      <footer className="App-footer">
        App created by <a href="#" className="App-link"> Ivan Volokha </a> 2021
      </footer>

    </div>
  )

}

export default App;
