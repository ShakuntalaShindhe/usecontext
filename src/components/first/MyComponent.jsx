import React, { useContext } from 'react'
import AppContext from './appcontext'

const MyComponent = () => {
    const text=useContext(AppContext)
  return (
    <div>
      <p>Example of use Context hook:{text}</p>
    </div>
  )
}

export default MyComponent
