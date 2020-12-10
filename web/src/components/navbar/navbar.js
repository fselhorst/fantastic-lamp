import { NavLink } from './nav-link'

export const NavBar = () => {
  return (
    <nav className="navbar rounded navbar-expand-md mt-3 navbar-light bg-light">
      <div className="container-fluid">
        <NavLink href="/" className="navbar-brand">
          skonky.xyz
        </NavLink>

        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink href="/" className="nav-link">
                🍔 Meal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/profile" className="nav-link">
                👨‍🍳 Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
