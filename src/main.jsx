import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ApolloProviderWrapper from './ApolloProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProviderWrapper>
    <App />
  </ApolloProviderWrapper>
)
