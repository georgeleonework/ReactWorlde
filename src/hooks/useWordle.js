import { useState } from 'react'



const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) 
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false) //only gets set to true when user wins game

    //format a guess into an array of letter objects

    const formatGuess = () => {

    }

    //add a new guess to guesses state 
    //update the isCorrect state if the guess is correct 
    //add one to the turn state

    const addNewGuess = () => {

    }

    //track the current guess
    //add new guess when user hits enter

    const handleKeyup = () => {

    }

    return (turn, currentGuess, guesses, isCorrect, handleKeyup) 
}

export default useWordle 