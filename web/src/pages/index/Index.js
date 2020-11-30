import { useEffect, useState } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Loading } from '../../components/loading/loading'
import config from '../../config'

import './Index.css'
import { PostForm } from '../../components/post-form/post-form'

const Index = () => {
  const [data, setData] = useState(null)
  const hasData = data && Object.keys(data).length > 0

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(`${config.API_URI}/posts`)
      const data = await response.json()
      setData(data)
    }
    fetchAPI()
  }, [])

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-7">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-7">
          <ul className="list-group">
            {hasData &&
              data.map((post) => {
                return (
                  <li className="list-group-item" key={post._id}>
                    {post.title}
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Index, {
  onRedirecting: () => <Loading />,
})
