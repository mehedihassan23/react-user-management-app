import React, { createContext, useState } from 'react'

// Create a context
export const  Context = createContext();

const ContextApi = ({children}) => {
    const [users, setUsers] = useState([{id:1, name: "Mehedi Hassan", institute: "Prime University", location: "Dhaka"}, {id: 2, name: "Jebunnesa jebin ", institute: "M Abdur Rahim Medical College", location: "Dinajpur"}, {id: 3, name: "Soma Akther", institute: "Bangabandhu Seikh Mujib Medical College", location: "Faridpur"}])

    const ContextValue = {users, setUsers}
    
  return (
     <Context.Provider value={ContextValue}>
          {children}
     </Context.Provider>
  )
}

export default ContextApi
