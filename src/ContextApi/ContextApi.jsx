import React, { createContext, useState } from 'react'

// Create a context
export const  Context = createContext();

const ContextApi = ({children}) => {
    const initialState = [{id:1, name: "Bilen", institute: "University of Oxford", location: "England"}, {id: 2, name: "Adohi", institute: "Harvard University", location: "United States"}, {id: 3, name: "Aira", institute: "Cambrige University", location: "England"}]
    
    const [users, setUsers] = useState(initialState)
    const ContextValue = {users, setUsers}
    
  return (
     <Context.Provider value={ContextValue}>
          {children}
     </Context.Provider>
  )
}

export default ContextApi
