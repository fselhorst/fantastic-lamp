import { AuthButton } from '../auth-button/auth-button'
import { NavLink } from './nav-link'

export const NavBar = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <nav className="navbar rounded navbar-expand-lg navbar-light bg-light">
            <NavLink href="/" className="navbar-brand">
              💎 NERD 0.1
            </NavLink>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink href="/" className="nav-link">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="/profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
              </ul>
              <div className="d-inline my-2 my-lg-0">
                <AuthButton />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
