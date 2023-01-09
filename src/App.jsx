import './App.css'
import ButtonStart from './components/ButtonStart'
import Counter from './components/Counter'
import Header from './components/Header'
import PlayerList from './components/PlayerList'
import Settings from './components/Settings'
import TeamScore from './components/TeamScore'
import { ScoreboardProvider } from './context/ScoreboardContext'

function App() {

  return (
    <div className="App">
      <ScoreboardProvider>

        <div className='header'>
          <Header />
          <div className='counter'>
            <h2 className='tempo'> 1° tempo </h2>         
            <Counter />
            <ButtonStart />
          </div>
        </div>
        <TeamScore />
        <Settings />
        <div className='playerSection'>
          <h1> Escalação </h1>
          <PlayerList />
        </div>
        

  
      </ScoreboardProvider>
    </div>
  )
}

export default App
