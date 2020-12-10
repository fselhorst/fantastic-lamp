import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { Router } from 'wouter'
import App from './App'
import PostProvider from './provider/post-provider'
import config from './config'

import './index.css'
import MealProvider from './provider/meal-provider'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={config.OAUTH_DOMAIN}
        clientId={config.OAUTH_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <PostProvider>
          <MealProvider>
            <App />
          </MealProvider>
        </PostProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
