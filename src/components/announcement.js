import React from 'react'

import PropTypes from 'prop-types'

import './announcement.css'

const Announcement = (props) => {
  return (
    <div className={`announcement-announcement ${props.rootClassName} `}>
      <span className="announcement-title">{props.Title}</span>
      <div className="announcement-button">
        <span className="announcement-button-text">{props.Button}</span>
      </div>
    </div>
  )
}

Announcement.defaultProps = {
  Title: 'We updated our Terms and Conditions.\n',
  rootClassName: '',
  Button: 'See now ->',
}

Announcement.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
}

export default Announcement
