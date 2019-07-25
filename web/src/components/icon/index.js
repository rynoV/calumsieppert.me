import React from 'react'
import HamburgerIcon from './hamburger'

function Icon(props) {
  if (props.symbol === 'hamburger') {
    return <HamburgerIcon />
  } else {
    return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
