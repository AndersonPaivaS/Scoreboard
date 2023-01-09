import React from 'react'
import { useContext } from 'react'
import { ScoreboardContext } from '../context/ScoreboardContext'
import styles from '../styles/components/buttonStart.module.css'

export default function ButtonStart() {
  const { timeCounter, startCounter } = useContext(ScoreboardContext)
  return (
    <button onClick={startCounter} className={styles.buttonStart}>
       {
        timeCounter == 0 ? 'Iniciar' : timeCounter > 0 && timeCounter < 10 * 60 ? 'Parar' : 'Zerar'
       }
    </button>
  )
}
