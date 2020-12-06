import { useContext } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'

import { Loading } from '../../components/loading/loading'
import { PostContext } from '../../provider/post-provider'
import { PostForm } from '../../components/post-form/post-form'

import './Index.css'

const Index = () => {
  const { posts, isLoading, removePost } = useContext(PostContext)
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="m-auto col-xs-12 col-sm-12 col-md-6">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="m-auto col-xs-12 col-sm-12 col-md-6">
          <ul className="list-group">
            {!isLoading &&
              posts.map(({ _id, author, title }) => {
                return (
                  <li
                    onClick={() => removePost(_id)}
                    className="list-group-item"
                    key={_id}
                  >
                    {title}
                    <p className="small">{author}</p>
                  </li>
                )
              })}
            {!isLoading && posts.length === 0 && (
              <p className="text-center">Wow... very empty here 🙉</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Index, {
  onRedirecting: () => <Loading />,
})
