import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar-navbar">
      <div className="navbar-desktop">
        <div className="navbar-main">
          <div className="navbar-branding">
            <h1 className="navbar-text">{props.surfslot}</h1>
          </div>
          <div className="navbar-links">
            <a href="#features" className="navbar-link link">
              Features
            </a>
            <a href="#faq" className="navbar-link1 link">
              {props.Link_2}
            </a>
            <a href="#pricing" className="navbar-link2 link">
              {props.Link_3}
            </a>
            <a
              href="mailto:ruben.r.rodrigues11@gmail.com?subject=SurfSlot - Contact Form"
              className="navbar-link3 link"
            >
              {props.Link_4}
            </a>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <div className="google-login">
            <span className="navbar-sign-up">{props.SignUp}</span>
          </div>
          <img
            id="open-mobile-menu"
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="navbar-hamburger-menu"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <div className="navbar-links1">
          <Link to="/" className="navbar-navlink">
            {props.text1}
          </Link>
          <Link to="/" className="navbar-navlink1">
            {props.text11}
          </Link>
          <Link to="/" className="navbar-navlink2">
            {props.text12}
          </Link>
          <Link to="/" className="navbar-navlink3">
            {props.text13}
          </Link>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-navlink4">
              <div className="navbar-btn">
                <span className="navbar-text1">{props.text131}</span>
              </div>
            </Link>
            <Link to="/" className="navbar-navlink5">
              <div className="navbar-btn1">
                <span className="navbar-text2">{props.text1311}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
        ></DangerousHTML>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_3: 'Prices',
  surfslot: 'surfslot',
  text1: 'Features',
  text12: 'Prices',
  Link_4: 'Contact',
  Link_1: 'Features',
  text131: 'Log in',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Sign up',
  text13: 'Contact',
  Link_2: 'How it works',
  pastedImage_alt: 'pastedImage',
  image_src: '/playground_assets/pastedimage-cx4wqj.svg',
  link_Link: '',
  text11: 'How it works',
  SignUp: 'Sign in',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  surfslot: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_4: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  link_Link: PropTypes.string,
  text11: PropTypes.string,
  SignUp: PropTypes.string,
}

export default Navbar
