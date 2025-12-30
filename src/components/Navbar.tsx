import { Link } from 'react-router-dom'
import { SocialLinks } from './SocialLinks'

export const Navbar = () => {
  return (
    <aside>
      <ul className="menu-hover-fill flex flex-col items-start leading-none space-y-4">
        <li><Link to="/" data-text="home">home</Link></li>
        <li><Link to="/artists" data-text="artists">artists</Link></li>
        <li><Link to="/archive" data-text="archive">archive</Link></li>
        <li><Link to="/contact" data-text="contact">contact</Link></li>
        <SocialLinks />
      </ul>
    </aside>
  )
}