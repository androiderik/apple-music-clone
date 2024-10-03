//Author: Erik Rodriguez

import React from 'react'
import { Highlight } from '../../components/Highlight'
import Link from 'next/link'
function HighlightBox() {
  return (
    <div className="dash-title">
      Highlight
      <Highlight />
      <Link href="/">Back to home</Link>
    </div>
  )
}

export default HighlightBox
