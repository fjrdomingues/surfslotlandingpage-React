import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <h1 className="footer-text">{props.surfslot}</h1>
            <span className="footer-surfslot">{props.text1}</span>
          </div>
        </div>
        <div className="footer-links"></div>
      </div>
      <span className="footer-text1">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  text1: "do not loose that surf session. work might wait, the tide don't",
  text: '© 2023 surfslot. All Rights Reserved.',
  surfslot: 'surfslot',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  surfslot: PropTypes.string,
}

export default Footer
