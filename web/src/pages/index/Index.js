import { useEffect, useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

import { Loading } from '../../components/loading/loading'
import './Index.css'

const Index = () => {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const { user } = useAuth0()

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch('http://localhost:8080/api')
      const data = await response.json()
      setData(data)
      setIsFetching(false)
    }

    fetchAPI()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron mt-4">
            <h1 className="display-4">NERD Stack</h1>
            <p className="lead">Nginx Express React Docker</p>
            <p>Hi {user.given_name} 👋</p>
            <hr className="my-4" />
            {!isFetching && <code>{JSON.stringify(data)}</code>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Index, {
  onRedirecting: () => <Loading />,
})
