import React, { useContext }  from 'react'
import './Home.css'
import { Context } from '../../ContextApi/ContextApi'



const Home = () => {
     const {users} = useContext(Context)
     console.log(users)
  return (
    <div>
      <h1>This is a home component</h1>
      {users && users.map(user => {
        const {id, name, institute} = user;
        return <article>
            <h1> <span>Id:</span> {id}</h1>
            <h1> <span>Name:</span> {name}</h1>
            <h1> <span>Institute:</span> {institute}</h1>

        </article>
      }) }
    </div>
  )
}

export default Home
