import React, { useContext }  from 'react'
import './Home.css'
import { Context } from '../../ContextApi/ContextApi'

const Home = () => {
     const {users} = useContext(Context)
     console.log(users)
  return (
    <div>
      <h1>This is a home component</h1>
      {users && users.map((user, index) => {
        const {id, name, institute} = user;
        return <article className='article'>           
            <h1> <span className='name'>User No:</span> {index + 1 }</h1>
            <h1> <span className='name'>Name:</span> {name}</h1>
            <h1> <span className='name'>Institute:</span> {institute}</h1>

        </article>
      }) }
    </div>
  )
}

export default Home
