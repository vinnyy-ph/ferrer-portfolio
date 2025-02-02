import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import AnimatedCursor from 'react-animated-cursor'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <AnimatedCursor
        innerSize={30}
        innerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#dec79b',
          mixBlendMode: 'exclusion',
        }}
      />
    <App />
  </React.StrictMode>
)
