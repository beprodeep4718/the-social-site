import React from 'react'
import { ReactLenis } from 'lenis/react'

const SmoothScroll = ({children}) => {
  return (
    <ReactLenis root options={{ duration: 1 }}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll