import { AuthButton } from '../auth-button/auth-button'
import { NavLink } from './nav-link'

export const NavBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              🚀 NERD 0.1
            </a>
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
              </ul>
              <AuthButton />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
