import { useEffect } from "react";
import { useDebugValue } from "react";
import { useState, createContext } from "react";
import SettingsPanel from "../components/SettingsPanel";

export const ScoreboardContext = createContext({})

export function ScoreboardProvider( {children} ) {

    const [ timeCounter, setTimeCounter] = useState(0)
    const [ isActive, setIsActive] = useState(false)
    const [ amountOfMinutes, setAmountOfMinutes ] = useState(10)

    const [goalForHome, setGoalForHome] = useState(0)
    const [goalForVisiting, setGoalForVisiting] = useState(0)

    const [activeSettings, setActiveSettings] = useState(false)
    const [nameHomeTeam, setNameHomeTeam] = useState("Time mandante")
    const [nameVisitingTeam, setNameVisitingTeam] = useState("Time visitante")

    const [championshipName, setChampionshipName] = useState("Nome do campeonato")

    const [playerNameTeamOne, setPlayerNameTeamOne] = useState("")
    const [playerNumberTeamOne, setPlayerNumberTeamOne] = useState("")
    const [teamOnePlayers, setTeamOnePlayers] = useState([])

    const [playerNameTeamTwo, setPlayerNameTeamTwo] = useState("")
    const [playerNumberTeamTwo, setPlayerNumberTeamTwo] = useState("")
    const [teamTwoPlayers, setTeamTwoPlayers] = useState([])

    const [idTeamOne, setIdTeamOne] = useState(0)
    const [idTeamTwo, setIdTeamTwo] = useState(0)


// CRONÔMETRO /////////////////////////

    let minutos = Math.floor(timeCounter / 60)
    let segundos = timeCounter % 60
    let min = String(minutos).padStart(2, '0')
    let seg = String(segundos).padStart(2, '0')

    const startCounter = () => {
        setIsActive(!isActive)
        if( timeCounter ==  amountOfMinutes * 60) {
            setTimeCounter(0)
        }
    }

    useEffect( () => {
        if(isActive == true && timeCounter < amountOfMinutes * 60){
            setTimeout(() => {
                setTimeCounter( timeCounter + 1)
            },1000) 
        }
       
    }, [isActive, timeCounter])

    const handleAmountOfMinutes = (e) => {
        setAmountOfMinutes(e.target.value)
    }

// PLACAR DO JOGO ////////////////

    const addGoalHome = () => {
        setGoalForHome(goalForHome + 1)
    }

    const addGoalVisiting = () => {
        setGoalForVisiting(goalForVisiting + 1)
    }

    const removeGoalHome = () => {
        if(goalForHome > 0) {
            setGoalForHome(goalForHome - 1)
        } else {
            setGoalForHome(0)
        } 
    }

    const removeGoalVisiting = () => {
        if(goalForVisiting > 0) {
            setGoalForVisiting(goalForVisiting - 1)
        } else {
            setGoalForVisiting(0)
        }
    }

// CONFIGURAÇÕES /////////////////////////

    const openSettings = () => {
        setActiveSettings(true)
    }

    const closeSettings = () => {
        setActiveSettings(false)
    }

    const handleHomeName = (e) => {
        setNameHomeTeam(e.target.value)
    }

    const handleVisitingName = (e) => {
        setNameVisitingTeam(e.target.value)
    }

// HEADER /////////////////////////////

    const handleChampionshipName = (e) => {
        setChampionshipName(e.target.value)
    }


// ESCALAÇÃO /////////////////////////////

    const handleNameTeamOne = (e) => {
        setPlayerNameTeamOne(e.target.value)
    }

    const handleNumberTeamOne = (e) => {
        setPlayerNumberTeamOne(e.target.value)
    }
    
    const sendTeamOneData = () => {
        setIdTeamOne(idTeamOne + 1)
        setTeamOnePlayers([...teamOnePlayers, {name: playerNameTeamOne, number: playerNumberTeamOne, id: idTeamOne}])
    }


    const handleNameTeamTwo = (e) => {
        setPlayerNameTeamTwo(e.target.value)
    }

    const handleNumberTeamTwo = (e) => {
        setPlayerNumberTeamTwo(e.target.value)
    }

    const sendTeamTwoData = () => {
        setIdTeamTwo(idTeamTwo + 1)
        setTeamTwoPlayers([...teamTwoPlayers, {name: playerNameTeamTwo, number: playerNumberTeamTwo, id: idTeamTwo }])
    }

    const removePlayerTeamOne = (res) => {
        const newArrayTeamOne = teamOnePlayers.filter(current => current != res)
        setTeamOnePlayers(newArrayTeamOne)
    }

    const removePlayerTeamTwo = (result) => {
        const newArrayTeamTwo = teamTwoPlayers.filter(current => current != result)
        setTeamTwoPlayers(newArrayTeamTwo)
    }

    const playerGoalTeamOne = (res) => {
        if( teamOnePlayers[res.id].redCard == 0 ) {
            teamOnePlayers[res.id].goalOne = teamOnePlayers[res.id].goalOne + 1
            setGoal(teamOnePlayers[res.id].goalOne)
        } else {
            teamOnePlayers[res.id].goalOne = teamOnePlayers[res.id].goalOne
            setGoal(teamOnePlayers[res.id].goalOne)
        }
        
    }

    const playerGoalTeamTwo = (result) => {
        teamTwoPlayers[result.id].goalTwo = teamTwoPlayers[result.id].goalTwo + 1
        setGoalTwo(teamTwoPlayers[result.id].goalTwo)

    }


    return(
        <ScoreboardContext.Provider value={{ 
            timeCounter,
            startCounter,
            min,
            seg,
            goalForHome,
            goalForVisiting,
            addGoalHome,
            addGoalVisiting,
            removeGoalHome,
            removeGoalVisiting,
            openSettings,
            closeSettings,
            nameHomeTeam,
            nameVisitingTeam,
            handleHomeName,
            handleVisitingName,
            handleChampionshipName,
            championshipName,
            handleAmountOfMinutes,

            handleNameTeamOne,
            handleNumberTeamOne,
            sendTeamOneData,
            teamOnePlayers,

            handleNameTeamTwo,
            handleNumberTeamTwo,
            sendTeamTwoData,
            teamTwoPlayers,
            removePlayerTeamOne,
            removePlayerTeamTwo,

            playerGoalTeamOne,
            playerGoalTeamTwo,
            
            }}>
            {children}
            {activeSettings == true ? <SettingsPanel /> : ''}
            
        </ScoreboardContext.Provider>
    )
}