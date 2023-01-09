import React, { useContext } from 'react'
import { ScoreboardContext } from '../context/ScoreboardContext'
import styles from '../styles/components/counter.module.css'

export default function Counter() {
  const { min, seg } = useContext(ScoreboardContext)
  return (
      <div className={styles.counter}>
          <h1> {min}:{seg} </h1>
          
      </div>
  )
}
