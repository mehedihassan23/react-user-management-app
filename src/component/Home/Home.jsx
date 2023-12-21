import React, { createContext } from 'react'
import './Home.css'

// Create a context
export const Context = createContext();

const Home = () => {
  return (
    <div>
      <h1>This is a home component</h1>
    </div>
  )
}

export default Home
