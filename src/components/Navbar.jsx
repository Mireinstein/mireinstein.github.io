/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Node modules
import { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ navOpen, theme, toggleTheme }) => {
    const lastActiveLink = useRef()
    const activeBox = useRef()
    const location = useLocation()

    const initActiveBox = () => {
        if (lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
        }
    }

    useEffect(() => {
        initActiveBox()
        window.addEventListener('resize', initActiveBox)

        return () => {
            window.removeEventListener('resize', initActiveBox)
        }
    }, [])

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active')
        event.target.classList.add('active')
        lastActiveLink.current = event.target

        activeBox.current.style.top = event.target.offsetTop + 'px'
        activeBox.current.style.left = event.target.offsetLeft + 'px'
        activeBox.current.style.width = event.target.offsetWidth + 'px'
        activeBox.current.style.height = event.target.offsetHeight + 'px'
    }

    const navItems = [
        {
            label: "Home",
            link: '/',
            hash: '#home',
            className: "nav-link active",
            ref: lastActiveLink,
        },
        {
            label: "About",
            link: '/',
            hash: '#about',
            className: "nav-link",
        },
        {
            label: "Skills",
            link: '/',
            hash: '#skills',
            className: "nav-link",

        },
        {
            label: "Projects",
            link: '/',
            hash: '#projects',
            className: "nav-link",
        },
        {
            label: "Freelance",
            link: '/freelance',
            className: "nav-link",
            isRoute: true,
        },
        {
            label: "Courses",
            link: '/',
            hash: '#courses',
            className: "nav-link",
        },
        {
            label: "Certifications",
            link: '/',
            hash: '#certifications',
            className: "nav-link",
        },
        {
            label: "Contact",
            link: '/',
            hash: '#contact',
            className: "nav-link",
        }
    ]

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {
                navItems.map(({ label, link, hash, className, ref, isRoute }, key) => {
                    // For the Freelance route, always use Link
                    if (isRoute) {
                        return (
                            <Link
                                to={link}
                                className={className}
                                key={key}
                                ref={ref}
                                onClick={activeCurrentLink}
                            >
                                {label}
                            </Link>
                        )
                    }

                    // For hash links: if on home page, use hash; otherwise navigate to home with hash
                    const isHomePage = location.pathname === '/'

                    if (isHomePage && hash) {
                        // On home page - use regular hash link for smooth scrolling
                        return (
                            <a
                                href={hash}
                                className={className}
                                key={key}
                                ref={ref}
                                onClick={activeCurrentLink}
                            >
                                {label}
                            </a>
                        )
                    } else {
                        // On other pages - use Link to navigate to home with hash
                        const destination = hash ? `/${hash}` : link
                        return (
                            <Link
                                to={destination}
                                className={className}
                                key={key}
                                ref={ref}
                                onClick={activeCurrentLink}
                            >
                                {label}
                            </Link>
                        )
                    }
                })
            }

            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="toggleBtn">
                {theme === 'dark' ? '🌜' : '☀️'}
            </button>

            {/* Active Box */}
            <div className='active-box' ref={activeBox}></div>

        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
}

export default Navbar