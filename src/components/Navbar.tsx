import { useState, useEffect } from 'react'
import { SocialLinks } from './SocialLinks'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'artists', 'archive', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top >= -100 && rect.top <= 300
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Sidebar / Desktop Navbar */}
      <aside className={`navbar ${isOpen ? 'open' : ''}`}>
        <nav className="nav-content">
          <ul className="menu-list">
            <li>
              <button
                onClick={() => scrollTo('home')}
                className={activeSection === 'home' ? 'active' : ''}
              >
                inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo('artists')}
                className={activeSection === 'artists' ? 'active' : ''}
              >
                artistas
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo('archive')}
                className={activeSection === 'archive' ? 'active' : ''}
              >
                archivo
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo('contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                contacto
              </button>
            </li>
          </ul>

          <div className="nav-footer">
            <SocialLinks />
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)} />}
    </>
  )
}