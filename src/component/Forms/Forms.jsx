import React, { useContext } from 'react'
import './Forms.css'
import { Context } from '../../ContextApi/ContextApi'
import { v4 as uuidv4 } from 'uuid';


const Forms = () => {
    const {users, setUsers} = useContext(Context)
   
    const handleSubmit =  (event) =>{
        event.preventDefault()
        const id = uuidv4(); 
        const newUser = {
            id,
            name: event.target.name.value,
            institute: event.target.institute.value,
            location: event.target.location.value
        }
        setUsers([...users, newUser])
        event.target.reset()
         
    }
  return (
    <div className='forms'>
      <form className='form' onSubmit={handleSubmit} >
        <div className="inputDiv">
             <div><label htmlFor="name">Name:</label></div>
             <input type="text" name='name' placeholder='Enter your Name' />
        </div>
        <div className="inputDiv">
            <div> <label htmlFor="institute">Institute:</label></div>
           
            <input type="text" name='institute' placeholder='Enter your Institute' />
        </div>
        <div className="inputDiv">
            <div><label htmlFor="location">Location:</label></div>
            <input type="text" name='location' placeholder='Enter your location' />
        </div>
        <input type="submit" value="Add User" />
      </form>
    </div>
  )
}

export default Forms
