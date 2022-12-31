import React from 'react'
import './Square.css'

function Square({val, chooseSquare}) {

console.log(val)

  return (
    
    <div style={{backgroundColor:val=="X" ? 'red' : 'blue'}} className="square" onClick={chooseSquare}>{val}</div>
  )
}

export default Square