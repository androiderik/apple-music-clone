import { handleClientScriptLoad } from 'next/script'
import { InventoryForm } from './form'
import { Table } from './table'
import { useReducer } from 'react'

const inventoryReducer = (inventory: Array<Object>, action: string) => {
  switch (action.type) {
    case 'added': {
      console.log(...inventory, 'invent')
      //return prev + current inventory in order not to override each other
      return [
        ...inventory, //prev invetory
        {
          id: action.id,
          product: action.inventory.product,
          entries: action.inventory.entries,
          sales: action.inventory.sales,
          done: false,
        }, //currrent inventory
      ]
    }
    case 'changed': {
      console.log(action, 'action: changed')
      console.log(inventory, 'changed')
      return
    }
    case 'deleted': {
      console.log(action, 'action: deleted')
      console.log(inventory, 'deleted')
      return
    }
    default: {
      console.log('Uknown action')
      return
    }
  }
}

export const InventoryPieces = () => {
  const [inventory, dispatch] = useReducer(inventoryReducer, initialInventory)

  const handleAddInfo = (data: Array<Object>) => {
    dispatch({
      type: 'added',
      id: nextId++,
      inventory: data,
    })
  }
  const handleChangeInfo = (data: Array<Object>) => {
    dispatch({
      type: 'changed',
      inventory: data,
    })
  }
  const handleDeleteInfo = (dataId: Number) => {
    dispatch({
      type: 'deleted',
      id: dataId,
    })
  }
  return (
    <>
      <InventoryForm onAddData={handleAddInfo} />
      <Table
        inventory={inventory}
        onDeleteData={handleDeleteInfo}
        onChangeData={handleChangeInfo}
      />
    </>
  )
}

let nextId = 3
const initialInventory = [
  {
    id: 1,
    product: 'bubalo',
    entries: 'cacahuate',
    sales: 'carlos v',
  },
  {
    id: 2,
    product: 'mazapan',
    entries: 'halls',
    sales: 'winis',
  },
]
