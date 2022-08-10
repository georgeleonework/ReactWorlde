import React from 'react'
import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup } = useWorlde(solution)

    useEffect(() => {
        window.addEventListender('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    })

  return (
    <div>Wordle</div>
  )
}
