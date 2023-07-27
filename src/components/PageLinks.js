import { pageLinks } from '../utils/data.js'
import PageLink from './PageLink.js'

const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass}>
            {pageLinks.map((link) => {
                return (
                    <PageLink key={link.id} link={link} itemClass={itemClass} />
                )
            })}
        </ul>
    )
}

export default PageLinks
