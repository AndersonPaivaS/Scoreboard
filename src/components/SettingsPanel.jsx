import React from 'react'
import { useContext } from 'react'
import { ScoreboardContext } from '../context/ScoreboardContext'
import styles from '../styles/components/settingsPanel.module.css'

export default function SettingsPanel() {
 
  const { closeSettings, handleHomeName, handleVisitingName, handleChampionshipName, handleAmountOfMinutes } = useContext(ScoreboardContext)
  return (
    <div className={styles.settingsContainer}>
        <div className={styles.settingsBox}>
          <header>
            <h1> Configurações do Scoreboard </h1>
          </header>
          <main>
            Time mandante <input onChange={handleHomeName} type="text" />
            Time visitante <input onChange={handleVisitingName} type="text" />
            Nome do campeonato <input onChange={handleChampionshipName} type="text" />
            Quantidade de minutos por tempo <input onChange={handleAmountOfMinutes} type="number" />
          </main>

          <footer>
            <button onClick={closeSettings}>
              <img src={`https://github.com/AndersonPaivaS/Scoreboard/raw/main/public/icons/x-button.png`} alt="Fechar" />
            </button>
          </footer>

        </div>
    </div>
  )
}
