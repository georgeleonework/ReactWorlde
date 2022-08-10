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

    const handleKeyup = ({ key }) => { //fires any time that a user enters something on the keyboard
        if (key === 'Enter') { //this would mean the user wants to submit the guess
            //only add guess if turn is less than 5
            if (turn > 5) {

            }
            //do not allow duplicate words
            if (history.includes(currentGuess)) {

            }
            //check word is 5 chars long
            if (currentGuess.length !== 5) {

            }
        }
        
        if (key === 'Backspace') {
          setCurrentGuess(prev => prev.slice(0, -1))
          return
        }
        if (/^[A-Za-z]$/.test(key)) {
          if (currentGuess.length < 5) {
            setCurrentGuess(prev => prev + key)
          }
        }
      }
    
      return {turn, currentGuess, guesses, isCorrect, handleKeyup}
    }
    
    export default useWordle