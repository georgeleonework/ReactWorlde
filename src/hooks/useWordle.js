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

    const handleKeyup = ({ key }) => {
        
        if (/^[A-Za-z]$/.test(key)) { //testing to make sure that the user types a letter key instead of something else
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                }) //this is updating the current guess to be the previous guess plus the next keystroke
            }
        }
    }

    return (turn, currentGuess, guesses, isCorrect, handleKeyup) 
}

export default useWordle 