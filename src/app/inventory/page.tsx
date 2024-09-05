//Author: Erik Rodriguez

import React from 'react'
import { Inventory } from '../../containers/Inventory'
import Link from 'next/link'
function InventoryPage() {
  return (
    <div className="dash-title">
      Inventory
      <Inventory />
      <Link href="/">Back to home</Link>
    </div>
  )
}

export default InventoryPage
