import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            onClick={() => loginWithRedirect()}
            className="btn btn-primary btn-lg"
            type="button"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
