import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { Loading } from '../../components/loading/loading'

const Profile = () => {
  const { user, logout } = useAuth0()
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="m-auto col-xs-12 col-md-6">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">
                {user.given_name} {user.family_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              <button
                className="btn btn-warning"
                onClick={() => logout({ returnTo: window.origin })}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
})
