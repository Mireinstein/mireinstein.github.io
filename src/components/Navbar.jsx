/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 */

// Node modules
import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Navbar = ({ navOpen, theme, toggleTheme }) => {
    const lastActiveLink = useRef()
    const activeBox = useRef()

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
            link: '#home',
            className: "nav-link active",
            ref: lastActiveLink,
        },
        {
            label: "About",
            link: '#about',
            className: "nav-link",
        },
        {
            label: "Skills",
            link: '#skills',
            className: "nav-link",

        },
        {
            label: "Projects",
            link: '#projects',
            className: "nav-link",
        },
        {
            label: "Courses",
            link: '#courses',
            className: "nav-link",
        },
        {
            label: "Certifications",
            link: '#certifications',
            className: "nav-link",
        },
        {
            label: "Contact",
            link: '#contact',
            className: "nav-link",
        }
    ]

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a
                        href={link}
                        className={className}
                        key={key}
                        ref={ref}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>
                ))
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