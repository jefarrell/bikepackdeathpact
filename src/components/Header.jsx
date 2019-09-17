import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

class Header extends Component {
  render() {
    const { invert } = this.props
    return (
      <nav invert={invert}>
        <Link to="/" aria-label="Back to Home">
          Frontend Developer
        </Link>
      </nav>
    )
  }
}

export default Header

Header.propTypes = {
  invert: PropTypes.bool,
}

Header.defaultProps = {
  invert: false,
}
