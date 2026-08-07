const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
]

const Nav = ({ theme, toggle }) => {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <a href="#home" className="site-nav__brand">Admire Madyira</a>
        <ul className="site-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav__link">{link.label}</a>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className="theme-toggle__icon" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
