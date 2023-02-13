import React, { useContext } from 'react'
import { ScoreboardContext } from '../context/ScoreboardContext'
import styles from '../styles/components/settings.module.css'

export default function Settings() {
    const { openSettings } = useContext(ScoreboardContext)

  return (
    <button onClick={openSettings}> <img src={`https://github.com/AndersonPaivaS/Scoreboard/raw/main/public/icons/settings.png`} alt="Configurações" /> </button>
  )
}
