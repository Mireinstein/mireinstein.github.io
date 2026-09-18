const Nav = ({ theme, toggle }) => {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <a href="#home" className="site-nav__brand">Admire Madyira</a>
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="theme-toggle__icon" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}

export default Nav
