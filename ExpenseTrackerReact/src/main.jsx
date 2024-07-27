import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme.js'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import GlobalState from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
 <GlobalState>
  <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
  </GlobalState>
)
