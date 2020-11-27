import { useAuth0 } from '@auth0/auth0-react'

export const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return isAuthenticated ? (
    <button className="btn btn-outline-dark nav-link" onClick={logout}>
      Logout
    </button>
  ) : (
    <button
      className="btn btn-outline-dark nav-link"
      onClick={() => loginWithRedirect(window.origin)}
    >
      Login
    </button>
  )
}
