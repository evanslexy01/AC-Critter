import * as React from 'react'

import './spinner.scss'

export default () => (
  <div className="ldp-spinner">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="progressbar">
      <circle cx="50" cy="50" r="45" />
    </svg>
  </div>
)
