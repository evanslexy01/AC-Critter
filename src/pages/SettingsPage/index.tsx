import Header from '../../components/Header'
import home from '../../assets/icons/home.svg'
import squid from '../../assets/icons/squid.svg'
import { PAGES } from '../../App'
import * as React from 'react'

export default ({ page, setPage }: { page: PAGES; setPage: (page: PAGES) => void }) => (
  <div className={`page${page === PAGES.Settings ? '' : ' page-hide-left'}`}>
    <Header title="Settings" btnRight={{ name: 'collections', icon: home, action: () => setPage(PAGES.Collections) }} />
    <div className="content">
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <div className="title-alt-container">
          <div className="title-alt">
            <span className="text-top">Northern Hemisphere</span>
            <span className="subtitle">Selected</span>
          </div>
        </div>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <div className="title-alt-container">
          <div className="title-alt">
            <span className="text-top">Southern Hemisphere</span>
            <span className="subtitle">&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)
