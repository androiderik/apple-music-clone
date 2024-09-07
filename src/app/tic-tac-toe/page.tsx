//Author: Erik Rodriguez

import React from 'react'
import TicTacToe from '../../containers/TicTacToe'
import Link from 'next/link'
function Gametictactoe() {
  return (
    <div className="dash-title">
      Contact book|
      <TicTacToe />
      <Link href="/">Back to home</Link>
    </div>
  )
}

export default Gametictactoe
