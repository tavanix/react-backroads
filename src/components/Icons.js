import { socialLinks } from '../utils/data.js'
import SocialLink from './SocialLink'

const Icons = ({ parentClass, iconClass }) => {
    return (
        <ul className={parentClass}>
            {socialLinks.map((link) => {
                return (
                    <SocialLink key={link.id} {...link} iconClass={iconClass} />
                )
            })}
        </ul>
    )
}

export default Icons
