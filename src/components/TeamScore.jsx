import React from 'react';
import { useContext } from 'react';
import { ScoreboardContext } from '../context/ScoreboardContext';
import styles from '../styles/components/teamScore.module.css';

export default function TeamScore() {

    const { goalForHome, goalForVisiting, addGoalHome, addGoalVisiting, removeGoalHome,removeGoalVisiting, nameHomeTeam, nameVisitingTeam } = useContext(ScoreboardContext)
  return (
    <>
        <section className={styles.teamScoreContainer}>
            <div className={styles.homeTeam}>
                <h2> { nameHomeTeam } </h2>
                <div className={styles.goal}>
                    <button onClick={addGoalHome}> <img src="./icons/goal.png" alt="Gool" /> </button>
                    <h1> {goalForHome} </h1>
                    <button onClick={removeGoalHome}> <img src="./icons/goal-anulled.png" alt="" /> </button>
                </div>
            </div>

            <div className={styles.visitingTeam}>
                <h2> { nameVisitingTeam } </h2>
                <div className={styles.goal}>
                    <button onClick={addGoalVisiting}> <img src="./icons/goal.png" alt="Gool" /> </button>
                    <h1> {goalForVisiting} </h1>
                    <button onClick={removeGoalVisiting}> <img src="./icons/goal-anulled.png" alt="" /> </button>
                </div>
            </div>
        </section>
    </>
  )
}
