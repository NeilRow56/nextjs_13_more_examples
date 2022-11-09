"use client"

import React, { useState } from 'react'

const words = ["Ship", "Boat", "Airplane", "Bus", "Car", "Bicycle", "Scooter"]

export default function WordGenerator() {

    const [word, setWord] = useState("Nothing yet:(")

    const generate = () => {
        const randomWord = words[Math.floor(Math.random() * words.length)]
        setWord(randomWord)
    }

     return (
    <div>
        <button className='bg-gray-400 rounded-md border border-gray-800 px-2 py-1' onClick={generate}>
            Generate Word
        </button>
        <div className='text-blue-700'>Geneeated: {word}</div>
    </div>
  )
}

