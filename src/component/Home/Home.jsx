import React, { useContext }  from 'react'
import './Home.css'
import { Context } from '../../ContextApi/ContextApi'
import Forms from '../Forms/Forms'


const Home = () => {
     const {users, setUsers} = useContext(Context)
     const handleDeleteUser = id =>{
      console.log(id)
     }

  return (
    <div className='center'>
      <h1>Welcome to User Management App</h1>
      <Forms />
      {users && users.map((user, index) => {
        const {id, name, institute,location} = user;
        return <article className='article'>           
           <div>
           <h1> <span className='name'>User No:</span> {index + 1 }</h1>
            <h1> <span className='name'>Name:</span> {name}</h1>
            <h1> <span className='name'>Institute:</span> {institute}</h1>
            <h1> <span className='name'>Location:</span> {location}</h1>
           </div>
            <button className='deleteBtn' onClick={()=> handleDeleteUser(id)}>Delete</button>
        </article>
      }) }
    </div>
  )
}

export default Home
