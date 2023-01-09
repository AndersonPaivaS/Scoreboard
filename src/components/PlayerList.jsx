import React from 'react'
import { useContext } from 'react'
import { ScoreboardContext } from '../context/ScoreboardContext'
import styles from '../styles/components/playerList.module.css'

export default function PlayerList() {
  
  const { handleNameTeamOne, handleNumberTeamOne, sendTeamOneData, teamOnePlayers, handleNameTeamTwo, handleNumberTeamTwo, sendTeamTwoData, teamTwoPlayers, removePlayerTeamOne, removePlayerTeamTwo, nameHomeTeam, nameVisitingTeam, playerGoalTeamOne, playerGoalTeamTwo, addYellowCardTeamOne, addRedCardTeamOne} = useContext(ScoreboardContext)


  return (
    <div className={styles.playerListContainer}>
        <div className={styles.list}>

            <h3> { nameHomeTeam } </h3>

            <div className={styles.dataOfPlayerOne}>
              <input onChange={handleNameTeamOne} type="text" placeholder='Nome' />
              <input onChange={handleNumberTeamOne} className={styles.inputNumber} type="number" placeholder='Número' />
              <button onClick={sendTeamOneData} > Adicionar jogador </button>
            </div>

            <div className={styles.players}>
              
              {teamOnePlayers.map((res) => (

                <span>
                  <button onClick={() => removePlayerTeamOne(res)} > <img id={styles.imgX} src="./icons/x-button.png" alt="button X" /> </button>
                  <p> {res.number} | {res.name} </p>
              </span>
              
              ))}
            </div>

        </div>



        <div className={styles.list}>

            <h3> { nameVisitingTeam } </h3>

            <div className={styles.dataOfPlayerTwo}>
              <input onChange={handleNameTeamTwo} type="text" placeholder='Nome' />
              <input onChange={handleNumberTeamTwo} className={styles.inputNumber} type="number" placeholder='Número' />
              <button onClick={sendTeamTwoData} > Adicionar jogador </button>
            </div>

            <div className={styles.players}>
              
              {teamTwoPlayers.map((result) => (
                <span>
                  <button onClick={() => removePlayerTeamTwo(result)} > <img id={styles.imgX} src="./icons/x-button.png" alt="button X" /> </button>
                  <p> {result.number} | {result.name} </p>
              </span>
              ))}

            </div>
        </div>
    </div>
  )
}
