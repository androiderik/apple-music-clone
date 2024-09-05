import React from 'react'

const style = {
  thTitle: {},
}
export const Table = ({ inventory }) => {
  return (
    <>
      TABLE
      <table>
        <thead>
          <tr>
            <th style={style.thTitle}>Products </th>
            <th style={style.thTitle}>Entries: </th>
            <th style={style.thTitle}>Sales: </th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>{item.entries}</td>
              <td>{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
