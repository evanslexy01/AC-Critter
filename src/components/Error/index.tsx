import anchovy from '../../assets/icons/anchovy.webp'
import * as React from 'react'

import './error.scss'

export default () => (
  <div className="ac-error">
    <img src={anchovy} alt="icon" />
    <span className="msg">something went wrong</span>
    <span className="detail">go back?</span>
  </div>
) //TODO: Add back button
