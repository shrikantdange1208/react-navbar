import logo from '../logo.svg'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState, useRef, useEffect } from 'react'

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = `0px`
    }
  }, [showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((sc) => {
            const { id, url, icon } = sc
            let socialIcon = null
            if (icon === 'facebook') {
              socialIcon = <FaFacebook />
            } else if (icon === 'twitter') {
              socialIcon = <FaTwitter />
            } else if (icon === 'linkedIn') {
              socialIcon = <FaLinkedin />
            } else {
              socialIcon = <FaBehance />
            }
            return (
              <li key={id}>
                <a href={url}>{socialIcon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
