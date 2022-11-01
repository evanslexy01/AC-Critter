import Header from '../../components/Header';
import home from '../../assets/icons/home.svg';
import squid from '../../assets/icons/squid.svg';
import { PAGES } from '../../App';
import * as React from 'react';

export default ({ page, setPage }: { page: PAGES; setPage: (page: PAGES) => void }) => (
  <div className={`page${page === PAGES.Critters ? '' : ' page-hide-right'}`}>
    <Header
      btnLeft={{ name: 'collections', icon: home, action: () => setPage(PAGES.Collections) }}
      title="Critters"
    />
    <div className="content">
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <div className="title-alt-container">
          <div className="title-alt">
            <span className="text-top">Giant Snakehead</span>
            <span className="subtitle">In Rivers Until 11:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
