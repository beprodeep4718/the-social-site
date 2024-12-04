import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import testProvider from './store/testContext.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <testProvider>
    <StrictMode>
      <SmoothScroll>
       <App />
      </SmoothScroll>
    </StrictMode>
  </testProvider>,
)
