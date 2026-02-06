/**
 * @copyright 2024 Aime Cesaire
 * @license Apache-2.0
 *
 */

//Node Modules
import PropTypes from "prop-types"
import { Link } from "react-router-dom"


//Primary Button

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    download,
    classes
}) => {
    if (href) {
        // Use Link for internal routes (starts with "/"), <a> for external links
        const isInternalLink = href.startsWith('/') && !href.startsWith('//');

        if (isInternalLink && !download) {
            return (
                <Link
                    to={href}
                    className={`btn btn-primary ${classes}`}
                >
                    {label}
                    {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
                </Link>
            )
        }

        return (
            <a
                href={href}
                target={target}
                download={download}
                className={`btn btn-primary ${classes}`}
            >
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    }
    else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    download: PropTypes.string,
    classes: PropTypes.string
}

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        // Use Link for internal routes (starts with "/"), <a> for external links and hash links
        const isInternalLink = href.startsWith('/') && !href.startsWith('//');
        const isHashLink = href.startsWith('#');

        if (isInternalLink && !isHashLink) {
            return (
                <Link
                    to={href}
                    className={`btn btn-outline ${classes}`}
                >
                    {label}
                    {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
                </Link>
            )
        }

        return (
            <a
                href={href}
                target={target}
                className={`btn btn-outline ${classes}`}
            >
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    }
    else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }
}

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


export {
    ButtonPrimary, 
    ButtonOutline
}