import React from 'react'
import {useState} from 'react'

export const Form = ({addUser}) => {
    const [user, setUser] = useState ("Nick")


    // controlled Method
  const handleOnChange = (e) => {
    const {value} = e.target // Destruccture of the value thats inside the e.target 

    // console.log(e.taregt)
    // console.log(e.target.value)
    setUser(value)
  }

    const handleOnSubmit = (e) => {
             e.preventDefault()
             addUser(user)
            // console.log(user)
          
    }

  return (
    <form onSubmit={handleOnSubmit} action="" className='user-form'>
      <p>{user}</p>
      <input onChange={handleOnChange} type="text" />
      <button>Add User</button>
    </form>
  )
}
