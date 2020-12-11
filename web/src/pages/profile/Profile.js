import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { useContext } from 'react'
import { Link } from 'wouter'
import { Loading } from '../../components/loading/loading'
import { MealContext } from '../../provider/meal-provider'

const Profile = () => {
  const { user, logout } = useAuth0()
  const { isLoading, meals } = useContext(MealContext)

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="m-auto col">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">
                {user.given_name} {user.family_name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              {!isLoading && meals.length !== 0 ? (
                <>
                  <p>
                    You have{' '}
                    <span className="badge bg-success">{meals.length}</span>{' '}
                    meal
                    {meals.length > 1 ? 's' : null}
                  </p>
                  <h2 className="mb-4">
                    {meals.map((_id) => {
                      return <span key={_id}>🍔</span>
                    })}
                  </h2>
                </>
              ) : (
                <p>
                  🙈 You have not added any meals yet{' '}
                  <Link className="text-link" to="/">
                    {' '}
                    Lets add some ✨
                  </Link>
                </p>
              )}
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
