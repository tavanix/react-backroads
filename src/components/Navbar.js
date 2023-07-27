import React from 'react'

import PageLinks from './PageLinks'
import Header from './Header.js'
import Icons from './Icons'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Header />
                <PageLinks parentClass={'nav-links'} itemClass={'nav-link'} />
                <Icons parentClass={'nav-icons'} iconClass={'nav-icon'} />
            </div>
        </nav>
    )
}

export default Navbar
