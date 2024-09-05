//Author: Erik Rodriguez 🤌
'use client' // This is a client component
import React from 'react'
import { InventoryPieces } from '../../components/InventoryPieces'

const styles = {
  container: {
    width: '100%',
    display: 'grid',
  },
}
export const Inventory = () => {
  return (
    <div style={styles.container}>
      <InventoryPieces />
    </div>
  )
}
