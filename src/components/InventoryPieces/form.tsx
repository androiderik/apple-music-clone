import React, { useState } from 'react'

export const InventoryForm = ({ onAddData }) => {
  const [data, setData] = useState({ product: '', entries: '', sales: '' })

  const handleOnChange = (e: Event) => {
    const { name, value } = e.target

    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const checkValues = Object.values(data).every((entries) => entries !== '')

    if (checkValues) {
      onAddData(data)

      setData({ product: '', entries: '', sales: '' })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="product"
          type="text"
          placeholder="product"
          onChange={handleOnChange}
          value={data.product}
        />
        <input
          name="entries"
          type="text"
          placeholder="entries"
          onChange={handleOnChange}
          value={data.entries}
        />
        <input
          name="sales"
          type="text"
          placeholder="sales"
          onChange={handleOnChange}
          value={data.sales}
        />
        <input type="submit" value="Add Inventory" />
        {/* <button
          onClick={() => {
            onAddData(data)
          }}
        >
          Add{' '}
        </button> */}
      </form>
    </>
  )
}
