//Author: Erik Rodriguez

import React from 'react'
import UserContainer from '../../containers/UserContainer'
import Link from 'next/link'
function Gametictactoe() {
  return (
    <div className="dash-title">
      User Dashboard
      <UserContainer />
      <Link href="/">Back to home</Link>
    </div>
  )
}

export default Gametictactoe
