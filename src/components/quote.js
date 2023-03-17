import React from 'react'

import PropTypes from 'prop-types'

import './quote.css'

const Quote = (props) => {
  return (
    <div className={`quote-quote ${props.rootClassName} `}>
      <div className="quote-quote1">
        <span className="quote-quote2">{props.Quote}</span>
      </div>
      <div className="quote-people">
        <div className="quote-person">
          <img
            alt={props.image_alt1}
            src="/playground_assets/joao-gaspar-testimonial-1-200w.jpeg"
            className="quote-image"
          />
          <div className="quote-person-details">
            <span className="quote-text">{props.Author}</span>
            <span className="">{props.Title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  image_src: '0ea78b37-b88e-4726-b6de-50228be9f07e',
  Quote:
    '“It just works. Forecasts are accurate as wow and the meetings better fit my calendar and lifestyle now"',
  rootClassName: '',
  Title: 'Founder @Finbird',
  Author: 'João Gaspar',
  image_alt1: 'be94076d-9916-409d-bbc9-bfae1bfdf57c',
  image_alt: 'image',
}

Quote.propTypes = {
  image_src: PropTypes.string,
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
  Author: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Quote
