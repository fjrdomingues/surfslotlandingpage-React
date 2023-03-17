import React from 'react'

import PropTypes from 'prop-types'

import './caption.css'

const Caption = (props) => {
  return (
    <div className="caption-container">
      <span className="caption-caption">{props.Caption}</span>
    </div>
  )
}

Caption.defaultProps = {
  Caption: 'Download for Android',
}

Caption.propTypes = {
  Caption: PropTypes.string,
}

export default Caption
