import React from 'react'
import { useContext } from 'react'
import { ScoreboardContext } from '../context/ScoreboardContext'
import styles from '../styles/components/header.module.css'

export default function Header() {

  const { championshipName } = useContext(ScoreboardContext)
  return (
    <div className={styles.header}>
      <img src="./icons/scoreboard.png" alt="" />
      <h1> { championshipName } </h1>
    </div>
  )
}
