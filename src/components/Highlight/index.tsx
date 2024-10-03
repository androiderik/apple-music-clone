//Author: Erik Rodriguez 🤌
'use client' // This is a client component
import React, {useState} from 'react'

const style = {
  bluebox: {
    backgroundColor: 'blue',
    padding: '20px',
    color: '#fff',
    margin: '10px',
  },
  yellowBox: {
    backgroundColor: 'yellow',
    padding: '20px',
    color: '#fff',
    margin: '10px',
  },
  button: {
    backgroundColor: '#f1d29f',
    border: '1px solid brown',
    borderRadius: '2px',
    display: 'flex'
  }
}

export const Highlight = () => {
  const [count, setCount] = useState(0)

  const names = ['Sam', 'Kenny', 'Alexander']
  let nameLength = []
  let newMin = []
  names.forEach((i) => {
    const wordLength = i.length
    const isClosest = Math.abs(wordLength - count)
    const minNumber = Math.min(isClosest)
    nameLength.push(minNumber)
    // newMin = nameLength.filter(
    //   (value, index) => nameLength.indexOf(value) === index,
    // )
  })

  console.log(newMin, 'newmin')
  let minDifference = Math.min(...nameLength)

  const onClickCount = () => {
    setCount(Math.floor(Math.random() * 11))
  }

  return (
    <>
      {names.map((i, key) => {
        const wordLength = i.length
        const isClosest = Math.abs(wordLength - count)
        const minNumber = Math.min(isClosest)

        console.log(minDifference, 'diff')
        let flag = false
        if (minNumber === minDifference) {
          flag = true
          minDifference = 0
        } else {
          flag = false
        }

        return (
          <div style={flag ? style.yellowBox : style.bluebox} key={key}>
            {i}
          </div>
        )
      })}
      <button style={style.button} onClick={onClickCount}>Random number: {count}</button>
    </>
  )
}