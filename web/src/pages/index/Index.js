import React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import { Loading } from '../../components/loading/loading'
import './Index.css'

const Index = () => {
  const { user } = useAuth0()
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron mt-4">
            <h1 className="display-4">Vastgoed Analytics</h1>
            <p className="lead">
              Eindelijk! Alle real-time data en calculaties van de vastgoedmarkt
              op één plek.
            </p>
            <p>Hoi {user.given_name} 👋</p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Index, {
  onRedirecting: () => <Loading />,
})
