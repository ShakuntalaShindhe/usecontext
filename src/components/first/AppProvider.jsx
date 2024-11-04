import React from 'react'
import AppContext from './appcontext'
import MyComponent from './MyComponent'

const AppProvider = () => {
    const info='Use context wrap inside the provider'
  return (
    <div>
      <AppContext.Provider value={info}>
      <MyComponent />
      </AppContext.Provider>
    </div>
  )
}

export default AppProvider
