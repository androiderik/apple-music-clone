//Author: Erik Rodriguez 🤌
'use client' // This is a client component
import React, { useState, useEffect, useRef } from 'react'
import './styles.css'

const style = {
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px',
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px',
    },
    inputs: {
      marginBottom: '5px',
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px',
    },
  },
}

const PhoneBookForm = (props) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    lastName: '',
    phone: '',
  })
  const [tableData, setTableData] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormInfo((prevFData) => ({ ...prevFData, [name]: value }))
  }

  const submitUserInfo = (e: Event) => {
    e.preventDefault()
    const checkVal = Object.values(formInfo).every((res) => {
      return res !== ''
    })
    // prev data is the formInfo previosly inserted in the array
    if (checkVal) {
      const concatFormInfo = (prevData: Array<Object>) => {
        return [...prevData, formInfo]
      }
      setTableData(concatFormInfo)

      setFormInfo({ name: '', lastName: '', phone: '' })
    }
  }
  //passing form info to props to table
  useEffect(() => {
    props.dataFromForm(tableData)
  })

  return (
    <>
      <form onSubmit={submitUserInfo} style={style.form.container}>
        <label>First name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userFirstname"
          name="name"
          type="text"
          value={formInfo.name}
          onChange={handleChange}
        />
        {!formInfo.name && (
          <p className="mandatory-input">name field is mandatory</p>
        )}
        <br />
        <label>Last name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userLastname"
          name="lastName"
          type="text"
          value={formInfo.lastName}
          onChange={handleChange}
        />
        {!formInfo.lastName && (
          <p className="mandatory-input">last name field is mandatory</p>
        )}
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="phone"
          type="text"
          value={formInfo.phone}
          onChange={handleChange}
        />
        {!formInfo.phone && (
          <p className="mandatory-input">phone field is mandatory</p>
        )}
        <br />
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    </>
  )
}

type tableData = {
  tableData: Array<Object>
}

const InformationTable = (props: tableData) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      for (const child of [...ref.current.children]) {
        setTimeout(() => {
          child.classList.add('active')
        }, 100)
      }
    }
  }, [props])

  type FormInfo = {
    name: ''
    lastName: ''
    phone: number
  }

  return (
    <div className="">
      <table className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First name: </th>
            <th style={style.tableCell}>Last name: </th>
            <th style={style.tableCell}>Phone: </th>
          </tr>
        </thead>
        <tbody ref={ref}>
          {props.tableData?.map((item: FormInfo, key: string) => {
            return (
              <tr key={key}>
                <td className="tdtable">{item.name} </td>
                <td className="tdtable">{item.lastName} </td>
                <td className="tdtable">{item.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export const ContactBook = () => {
  const [formP, setFormProps] = useState()
  const dataFromForm = (formProps) => {
    setFormProps(formProps)
  }

  return (
    <section>
      <PhoneBookForm dataFromForm={dataFromForm} />
      <InformationTable tableData={formP} />
    </section>
  )
}
