import React from 'react'

const SocialLink = ({ href, icon, iconClass }) => {
    return (
        <li>
            <a
                rel='noreferrer'
                href={href}
                target='_blank'
                className={iconClass}
            >
                <i className={icon}></i>
            </a>
        </li>
    )
}

export default SocialLink
