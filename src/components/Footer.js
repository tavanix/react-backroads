import React from 'react'
import PageLinks from './PageLinks.js'
import Icons from './Icons'

const Footer = () => {
    return (
        <footer className='section footer'>
            <PageLinks parentClass={'footer-links'} itemClass={'footer-link'} />
            <Icons parentClass={'footer-icons'} iconClass={'footer-icon'} />
            <p className='copyright'>
                copyright &copy; Backroads travel tours company
                <span id='date'>{new Date().getFullYear()}</span> all rights
                reserved
            </p>
        </footer>
    )
}

export default Footer
