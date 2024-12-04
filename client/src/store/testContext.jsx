import React, { createContext } from 'react'

export const testContext = createContext();

const testProvider = ({children}) => {
  return (
    <div>
        hi broooooo
    </div>
  )
}
export default testProvider
