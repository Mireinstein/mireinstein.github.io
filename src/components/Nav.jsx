import { links } from "../data/links"

// LinkedIn is where most of the rows already point, so the nav carries GitHub
// only; both sit in the Connect row regardless.
const externalLinks = [
  { label: "GitHub", url: "https://github.com/Mireinstein" },
]

const Nav = ({ theme, toggle }) => {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <a href="#home" className="site-nav__brand">Admire Madyira</a>
        <ul className="site-nav__links">
          {[...links, ...externalLinks].map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-nav__link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
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
